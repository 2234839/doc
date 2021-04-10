import Axios from "axios";
import { parse } from "fast-xml-parser";
import { unescape } from "html-escaper";
import { RssHub } from "../../../data/app.config";
import { Fun_Cache } from "../../util/fun_cache";

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
const fun_cache = new Fun_Cache(5 * 60 * 1000);

export async function 最新动态_rss() {
  return await fun_cache.run(最近动态);
}

/** 获取所有指定的rss数据,输出的 des 是安全html */
async function 最近动态() {
  const allRss = (
    await Promise.all(
      RssHub.map(async (el) => {
        try {
          return await rssFetch(el);
        } catch (error) {
          // console.warn("rss 获取失败", el, error);
          return [];
        }
      }),
    )
  )
    .reduce((a, b) => [...a, ...b], [])
    .sort((a, b) => {
      return b.content.pubDate.getTime() - a.content.pubDate.getTime();
    })
    .slice(0, 15);
  return allRss;
}

async function rssFetch(平台: typeof RssHub[number]): Promise<RSS_data[]> {
  const r = await Axios.get(平台.RssUrl).catch((e) => {
    console.log("请求错误", e);

    throw { a: 2, e };
  });

  const json = parse(r.data);
  return json.rss.channel.item.map(
    (el: {
      title: string;
      description: string;
      pubDate: string;
      link: string;
    }) => ({
      平台,
      content: {
        title: el.title,
        webUrl: el.link,
        des: 平台.isEncode ? unescape(el.description) : el.description,
        pubDate: new Date(el.pubDate),
      },
    }),
  );
}
