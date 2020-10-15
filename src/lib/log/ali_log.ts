import { store } from "../../data/store/store";
import { read } from "../svelte/store";

export function GenerateAliLogTracker(window, host: string, project: string, logStore: string) {
  return new AliLogTracker(host, project, logStore);
}
function createHttpRequest() {
  //@ts-ignore
  if (window.ActiveXObject) {
    //@ts-ignore
    return new ActiveXObject("Microsoft.XMLHTTP");
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
}
class AliLogTracker {
  private uri_: string;
  private params_: any[];
  private httpRequest_: XMLHttpRequest;
  constructor(private host: string, private project: string, private logStore: string) {
    this.uri_ = "https://" + project + "." + host + "/logstores/" + logStore + "/track?APIVersion=0.6.0";
    this.params_ = new Array();
    this.httpRequest_ = createHttpRequest();
    this.push("href", decodeURIComponent(location.href));
    this.push("uuid", read(store).uuid);
  }
  push(key, value) {
    if (!key || !value) {
      return;
    }
    this.params_.push(key);
    this.params_.push(value);
    return this;
  }

  logger() {
    var url = this.uri_;
    var k = 0;
    while (this.params_.length > 0) {
      if (k % 2 == 0) {
        url += "&" + encodeURIComponent(this.params_.shift());
      } else {
        url += "=" + encodeURIComponent(this.params_.shift());
      }
      ++k;
    }
    try {
      this.httpRequest_.open("GET", url, true);
      this.httpRequest_.send(null);
    } catch (ex) {
      if (window && window.console && typeof window.console.log === "function") {
        console.log("Failed to log to ali log service because of this exception:\n" + ex);
        console.log("Failed log data:", url);
      }
    }
  }
}
export const newLog = () => GenerateAliLogTracker(window, "cn-hangzhou.log.aliyuncs.com", "llej", "llej_doc");
