import { minDistance } from "../../纯算法/编辑距离";
import { 获取文档资源 } from "../../资源检索/最近更新";

/** ═════════🏳‍🌈 通过查询是否有和该链接相近的 url 提示用户可以去这些地方看看 🏳‍🌈═════════  */
export async function find404Near(url: string, /** 返回几条 */ n = 5) {
  const { md_file } = await 获取文档资源();
  return md_file
    .map((el) => ({ ...el, 编辑距离: minDistance([...url], [...el.webPath]) }))
    .sort((a, b) => {
      return a.编辑距离 - b.编辑距离;
    })
    .slice(0, n)
    .map((el) => ({ webPath: el.webPath, name: el.basename }));
}
