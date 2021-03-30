## 序
{: id="20210330080300-857gpch" updated="20210330080305"}

((20210330075704-i2hw4i6 "点击这里直接去看源码 >>>"))
{: id="20210330075753-6qu6tnx" updated="20210330080300"}

- {: id="20210330080543-fxe211d"}虽然标题是 ((20210330075700-7dekwqy "{{.text}}")), 但实际上这套封装可以应用到所有的前后端状态同步场景, 只需要修改一下事件监听与发送的代码。
  {: id="20210330080543-xfnvnj5" updated="20210330080801"}
- {: id="20210330080801-wfgb6ou"}代码中引入的其他函数的作用
  {: id="20210330080801-btc2cpi" updated="20210330081050"}

  - {: id="20210330080838-nxk2wwy"}`env_isRenderer` ：判断当前代码环境是否处于 renderer , 这个代码前后端都是可以引用的。
    {: id="20210330080838-0i4tsbq" updated="20210330081008"}
  - {: id="20210330080937-r2ckcc1"}`useElectron` ：获取 `Electron` 对象
    {: id="20210330080937-r6w26r6" updated="20210330081005"}
  - {: id="20210330081012-g5gn2hi"}`useIpc` : 获取 `Electron.IpcRenderer` 对象
    {: id="20210330081012-hlpin8q" updated="20210330081045"}
  {: id="20210330080838-q6gm15v"}
- {: id="20210330082300-bprukor"}这个封装的作用
  {: id="20210330082258-1rt29vd" updated="20210330082304"}

  - {: id="20210330082306-6qzgm5t"}无论是在主线程还是渲染线程对该函数产生的计算属性的 `set value` 都会通过 ipc 同步到主线程与所有的渲染线程
    {: id="20210330082306-i14tid1" updated="20210330082443"}
  - {: id="20210330082443-urrslvo"}使用起来的时候就无需考虑 `.on` 这样的代码，就是简简单单的引入一个计算属性然后想咋用咋用。
    {: id="20210330082443-2ff2324" updated="20210330082617"}
  {: id="20210330082306-f1n73mt"}
{: id="20210330075833-0cpddam" updated="20210330081041"}

另外就没什么好说的了，直接去下面看源码吧，注释很详细。
{: id="20210330081154-mqagtl9" updated="20210330081221"}

{: id="20210330080538-0a11xzg" updated="20210330080541"}

## 源码
{: id="20210330075815-77no075" updated="20210330075836"}

[起源项目](https://github.com/2234839/quote/blob/main/packages/app/src/shared/hook/icp_wrap.ts)
{: id="20210330075838-u8bmwj1" updated="20210330080247"}

```ts
import { env_isRenderer } from "../sharedLib";
import { computed, ref, toRaw, UnwrapRef, WritableComputedRef } from "vue";
import { useElectron, useIpc } from "./electron";

export function useIpcComputed<T>(
  channel: string,
  defaultData: T
): WritableComputedRef<UnwrapRef<T>> {

  const { cacheMap, getRendererUpdateChannel } = useIpcComputed;

  if (cacheMap.has(channel)) {

    return cacheMap.get(channel);
  } else {
    const _ref = ref(defaultData);
    const _computed = computed({
      get() {
        return _ref.value;
      },
      set(v: UnwrapRef<T>) {
        _ref.value = v;

        if (env_isRenderer()) {
          // 客户端更新值到服务端,这里会使发送者的 computed 触发两次更新（它自己 set 一次，这里一次），
          // 不过这不是什么大问题，还可以保持各端的数据一致
          useIpc().send(getRendererUpdateChannel(channel), v);
        } else {
          // 服务端推送新值到所有客户端
          useElectron()
            .webContents.getAllWebContents()
            .forEach((webContent) => webContent.send(channel, v));
        }
      },
    });

    if (env_isRenderer()) {
      // 客户端第一次调用 useIpcComputed 从 主线程 更新一下默认值
      useIpc().send(channel);
      // 客户端监听服务端的值更新
      useIpc().on(channel, (event, v: UnwrapRef<T>) => (_ref.value = v));
    } else {
      // 客户端第一次调用 useIpcComputed 会从 主线程 更新一下默认值，这里用于处理该事件

      useElectron().ipcMain.on(channel, (event, v) => {
        // 因为 ref.value 是一个 proxy 而 event.reply 内部无法序列化 proxy
        const _raw_v = toRaw(_ref.value);
        event.reply(channel, _raw_v);
      });
      // 客户端主动更新值
      useElectron().ipcMain.on(
        getRendererUpdateChannel(channel),
        (event, v) => {
          _computed.value = v;
        }
      );
    }

    cacheMap.set(channel, _computed);
    return _computed;
  }
}
export namespace useIpcComputed {

  export const cacheMap = new Map<string, any>();
  export const getRendererUpdateChannel = (s: string) => `${s}-renderer-update`;
}

```
{: id="20210330075704-i2hw4i6" updated="20210330075725"}


{: id="20210330075700-7dekwqy" type="doc"}
