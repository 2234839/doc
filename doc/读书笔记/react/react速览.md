# 崮生的 react 速览
{: id="20201226094811-z0otgmg"}

## [ref 选中 dom](https://zh-hans.reactjs.org/docs/hooks-reference.html#useref)
{: id="20201226094829-muc64o3"}

```
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```
{: id="20201226094948-xjxdzxz"}

!((20201204144054-y56w3kq "{{.text}}"))
{: id="20201226095026-6opi9do"}

{: id="20201226095416-h7ejndl"}


{: id="20201226094811-1ndo5l2" type="doc"}
