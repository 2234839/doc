import { writable } from "svelte/store";

export const messageList = writable([] as Message[]);
/** 消息的基类 扩展类记得重写 thatMessage 以免公用出现bug */
export class Message {
  /** 用来指向不同的类，以便扩展这个类的类的old_message不被公用 */
  private autoHideTime = 1000 * 3;
  constructor(
    public content: string,
    public style = "",
    public dot?: {
      /** 点的颜色 */
      c: string;
    },
  ) {}
  /** 展示el */
  show() {
    messageList.update((r) => [...r, this]);
    return this;
  }
  /** 隐藏el */
  hide() {
    messageList.update((r) => r.filter((el) => this !== el));
    return this;
  }
  /** 展示el  autoHideTime 毫秒后隐藏*/
  autoHide(time?: number) {
    this.show();
    setTimeout(
      () => {
        this.hide();
      },
      time ? time : this.autoHideTime,
    );
    return this;
  }
}
/** 显示消息一会 */
export function showMessageForAWhile(options: { content: string; status: "ok" | "fail" }) {
  const dot_c_map = { ok: "blue", fail: "red" };
  const dot = { c: dot_c_map[options.status] };
  new Message(options.content, "", dot).autoHide();
}
new Message("测试数据", "color:red", { c: "red" }).show();
