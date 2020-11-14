import { store } from "../../data/store/store";
import { read } from "../svelte/store";

export function GenerateAliLogTracker(host: string, project: string, logStore: string) {
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
  constructor(private host: string, private project: string, private logStore: string) {
    this.uri_ = "https://" + project + "." + host + "/logstores/" + logStore + "/track?APIVersion=0.6.0";
    this.params_ = new Array();
    if (typeof window !== "undefined") {
      this.push("href", decodeURIComponent(location.href));
      this.push("uuid", read(store).uuid);
    }
  }
  push(key: string, value: any) {
    if (!key || !value) {
      return this;
    }
    this.params_.push(key);
    this.params_.push(value);
    return this;
  }

  /** 发送请求 */
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
      ajax_get(url);
    } catch (ex) {
      console.log("Failed to log to ali log service because of this exception:\n" + ex);
      console.log("Failed log data:", url);
    }
  }
}
export const newLog = () => GenerateAliLogTracker("cn-hangzhou.log.aliyuncs.com", "llej", "llej_doc");

function ajax_get(url: string) {
  if (typeof window === "undefined") {
    var https = require("follow-redirects").https;
    https.get(url);
  } else {
    const xhr = createHttpRequest();
    xhr.open("GET", url, true);
    xhr.send(null);
  }
}
