export function on<K extends keyof DocumentEventMap>(
  target: HTMLElement,
  eventName: K,
  selector: string,
  cb: (evt: Event, el: HTMLElement) => void,
) {
  const handle = (e: any) => {
    let t = e.target as HTMLElement;
    // e.preventDefault()
    // console.log('[e]',e,t)
    const 合法元素 = Array.from(target.querySelectorAll(selector));
    while (t != target && t.parentElement) {
      if (合法元素.includes(t)) {
        cb(e, t);
      }
      t = t.parentElement;
    }
  };
  target.addEventListener(eventName, handle);
  return function destroy() {
    target.removeEventListener(eventName, handle);
  };
}
