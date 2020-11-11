import Axios from "axios";
import { parse } from "fast-xml-parser";
import { RssHub } from "../../../data/app.config";
import { Fun_Cache } from "../../util/fun_cache";
import xss from "xss";
import { escape, unescape } from "html-escaper";

interface RSS_data {
  平台: typeof RssHub[number];
  content: {
    title: string;
    webUrl: string;
    /** 可以是 html 格式 */
    des: string;
    pubDate: Date;
  };
}

let data = [] as RSS_data[];

const fun_cache = new Fun_Cache(5 * 60 * 1000);

export function 最新动态_rss() {
  return fun_cache.run(最近动态);
}

/** 获取所有指定的rss数据,输出的 des 是安全html */
async function 最近动态() {
  const allRss = (await Promise.all(RssHub.map((el) => rssFetch(el))))
    .reduce((a, b) => [...a, ...b], [])
    .sort((a, b) => {
      return b.content.pubDate.getTime() - a.content.pubDate.getTime();
    })
    .slice(0, 15);
  return allRss;
}

async function rssFetch(平台: typeof RssHub[number]): Promise<RSS_data[]> {
  const r = await Axios.get(平台.RssUrl);

  const json = parse(r.data);
  return json.rss.channel.item.map((el: { title: string; description: string; pubDate: string; link: string }) => ({
    平台,
    content: {
      title: el.title,
      webUrl: el.link,
      des: 平台.isEncode ? unescape(el.description) : el.description,
      pubDate: new Date(el.pubDate),
    },
  }));
}
