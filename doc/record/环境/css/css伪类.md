> [MDN-伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes) CSS **伪类** 是添加到选择器的关键字，指定要选择的元素的特殊状态。例如，[`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover ":hover CSS伪类适用于用户使用指示设备虚指一个元素（没有激活它）的情况。这个样式会被任何与链接相关的伪类重写，像:link, :visited, 和 :active等。为了确保生效，:hover规则需要放在:link和:visited规则之后，但是在:active规则之前，按照LVHA的循顺序声明:link－:visited－:hover－:active。") 可被用于在用户将鼠标悬停在按钮上时改变按钮的颜色。
> {: id="20210105091903-b55pqsp"}
{: id="20210105091835-hcbrfcq"}

## CSS 伪类索引
{: id="20210105092223-kk4y4xv"}

#### emoji 标识索引
{: id="20210105151634-6gptd8y"}

🧪：实验中的功能，兼容性还不够好，而且将来可能会改变
{: id="20210105133946-r1vnroj"}

⛔：目前基本没有浏览器兼容，不要期望短期内能用
{: id="20210105143440-ej6crhw"}

引用链接（复制用）： ((20210105133946-r1vnroj "🧪")) ((20210105143440-ej6crhw "⛔"))
{: id="20210105133943-kpdm2mp"}

### [语言伪类](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Linguistic_pseudo-classes "Permalink to Linguistic pseudo-classes")
{: id="20210105142132-gg1wa6c"}

> 这些伪类反映文档语言，并启用基于语言或脚本方向选择元素。
> {: id="20210105142120-6r1t88r"}
{: id="20210105142120-8f8o7xk"}

| 伪类名                                                           | 概述                                                             |
| --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`:dir()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:dir)   | ((20210105133946-r1vnroj "🧪")) 匹配特定文字书写方向的元素 |
| [`:lang()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) | 基于元素语言来匹配页面元素。                         |
{: id="20210105141721-wzh08fk"}

### [位置伪类](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Location_pseudo-classes "Permalink to Location pseudo-classes")
{: id="20210105142149-cfq3uqo"}

> 这些伪类与链接和当前文档中的目标元素相关。
> {: id="20210105142205-11zqymx"}
{: id="20210105142204-3qvepul"}

| 伪类名                                                                           | 概述                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`:any-link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link)           | ((20210105133946-r1vnroj "🧪")) 有链接锚点的元素，会匹配每一个有 href 属性的 `<a> <area> <link>` <br />是`:link` 与`:visited` 的并集                                                                                                                                                      |
| [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link)                   | 匹配尚未被访问的链接                                                                                                                                                                                                                                                                               |
| [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)             | 匹配已访问的链接                                                                                                                                                                                                                                                                                     |
| [`:local-link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:local-link)       | 匹配绝对 URL 与目标 URL 相同的链接，例如指向同一页面的锚链接。                                                                                                                                                                                                                     |
| [`:target`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target)               | 代表一个唯一的页面元素(目标元素)，其 `id` 与当前 URL 片段匹配 .                                                                                                                                                                                                                      |
| [`:target-within`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target-within) | ((20210105143440-ej6crhw "⛔"))((20210105133946-r1vnroj "🧪")) 它表示一个本身由 `:target` 伪类匹配的元素，<br />或者具有一个由`:target` 匹配的后代元素。(这包括`shadow trees`中的后代。)                                                                                         |
| [`:scope`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope)                 | 表示作为选择器要匹配的参考点的元素。<br />目前在样式表中`:scope`等效于`:root`因为目前还没有方法来显式建立作用域<br />但通过 js 的[`querySelector()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/querySelector) 这类方法是可以使用的 |
{: id="20210105142212-mnut670"}

### [用户操作伪类](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#User_action_pseudo-classes "Permalink to User action pseudo-classes")
{: id="20210105144053-70uyfkp"}

> 这些伪类需要用户进行一些交互才能应用，例如在元素上按住鼠标指针。
> {: id="20210105144108-ixqvtve"}
{: id="20210105142208-dy69xdj"}

| 伪类名                                                                           | 概述                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover)                 | 用户使用指示设备虚指[^虚指] 一个元素（没有激活它）的情况                                                                                                                                                                                                                                                                                                                                      |
| [`:active`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active)               | 匹配被用户激活的元素，<br />当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间。                                                                                                                                                                                                                                                                                     |
| [`:focus`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus)                 | 表示获得焦点的元素（如表单输入）。<br />当用户点击或触摸元素或通过键盘的 “tab” 键选择它时会被触发。                                                                                                                                                                                                                                                                    |
| [`:focus-visible`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-visible) | 当元素匹配[`:focus`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus "CSS伪类 :focus表示获得焦点的元素（如表单输入）。当用户点击或触摸元素或通过键盘的 “tab” 键选择它时会被触发。")伪类并且客户端(UA)的启发式引擎决定焦点应当可见                                                                                                   |
| [`:focus-within`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-within)   | 元素自身或者它的某个后代匹配 [`:focus`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus "CSS伪类 :focus表示获得焦点的元素（如表单输入）。当用户点击或触摸元素或通过键盘的 “tab” 键选择它时会被触发。") 伪类。<br />（[shadow DOM 树](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Shadow_DOM)中的后代也包括在内） |
{: id="20210105144158-uul52z2"}

### [时间维伪类](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Time-dimensional_pseudo-classes "Permalink to Time-dimensional pseudo-classes")
{: id="20210105145132-kujgrrw"}

> 这些伪类适用于查看具有计时功能的内容，例如 WebVTT 标题跟踪。
> {: id="20210105145527-5d7n2ru"}
{: id="20210105145525-9vuafv1"}

| 伪类名                                                               | 概述                                                                   |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`:current`](https://developer.mozilla.org/en-US/docs/Web/CSS/:current) | 当前正在显示的元素或元素的祖先。                         |
| [`:past`](https://developer.mozilla.org/en-US/docs/Web/CSS/:past)       | 匹配任何完全出现在匹配`:current` 的元素之**前**的元素 |
| [`:future`](https://developer.mozilla.org/en-US/docs/Web/CSS/:future)   | 匹配任何完全出现在匹配`:current` 的元素之**后**的元素 |
{: id="20210105145229-cthqj8g"}

### [资源状态伪类](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Resource_state_pseudo-classes "Permalink to Resource state pseudo-classes")
{: id="20210105145640-c70bkng"}

| 伪类名                                                               | 概述                                                    |
| ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`:playing`](https://developer.mozilla.org/en-US/docs/Web/CSS/:playing) | ((20210105133946-r1vnroj "🧪")) 匹配处于播放状态元素 |
| [`:paused`](https://developer.mozilla.org/en-US/docs/Web/CSS/:paused)   | ((20210105133946-r1vnroj "🧪")) 匹配处于暂停状态元素 |
{: id="20210105145650-ksbctxz"}

## [输入伪类](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#The_input_pseudo-classes "Permalink to The input pseudo-classes")
{: id="20210105150239-yaj2wgu"}

> 这些伪类与表单元素相关，并启用基于 HTML 属性以及字段在交互之前和之后的状态选择元素。
> {: id="20210105150248-pe5dk05"}
{: id="20210105150239-nez837n"}

| 伪类名                                                                                   | 概述                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`:enabled`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:enabled)                     | 表示任何被启用的（enabled）元素<br />如果一个元素能够被激活（如选择、点击或接受文本输入），<br />或者能够获取焦点，则该元素是启用的 |
| [`:disabled`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:disabled)                   | 任何被禁用的元素 ,和`:enabled`相反，不能够被激活或者获取焦点                                                                                                        |
| [`:read-only`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-only)                 | 元素处于不可被用户编辑的状态（只读），<br />**不仅仅是`input`其他div之类也算**                                                                                 |
| [`:read-write`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-write)               | 表示元素不可被用户编辑的状态（如锁定的文本输入框），**同上**                                                                                                    |
| [`:placeholder-shown`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:placeholder-shown) | ((20210105133946-r1vnroj "🧪"))匹配正在显示 placeholder text 的`<input> <textarea>`                                                                                                       |
| [`:default`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:default)                     | 匹配一组相关元素中默认选中的那个表单元素                                                                                                                                |
| [`:checked`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked)                     | 匹配任何处于选中状态的元素， `radio checkbox option`                                                                                                                          |
| [`:indeterminate`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:indeterminate)         | 匹配处于不确定状态的表单元素                                                                                                                                                  |
| [`:blank`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:blank)                         | ((20210105143440-ej6crhw "⛔"))((20210105133946-r1vnroj "🧪"))匹配输入为空的输入元素                                                                                                        |
| [`:valid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:valid)                         | 匹配校验输入通过的表单元素                                                                                                                                                     |
| [`:invalid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid)                     | 匹配校验输入**未通过**的表单元素                                                                                                                                              |
| [`:user-invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)           | ((20210105133946-r1vnroj "🧪"))匹配经过用户交互后仍然校验未通过的表单元素                                                                                                   |
| [`:in-range`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:in-range)                   | 匹配一个指定了数值范围且值在该范围**内**的输入元素                                                                                                                   |
| [`:out-of-range`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:out-of-range)           | 匹配一个指定了数值范围且值在该范围**外**的输入元素                                                                                                                   |
| [`:required`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:required)                   | 匹配设定了`required`属性的 `<input> <select> <textarea>`                                                                                                                            |
| [`:optional`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:optional)                   | 匹配没有设定`required`属性的 `<input> <select> <textarea>`                                                                                                                         |
{: id="20210105150254-r5ojz5i"}

### [树结构伪类](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Tree-structural_pseudo-classes "Permalink to Tree-structural pseudo-classes")
{: id="20210105153035-e4he5cy"}

> 这些伪类与元素在dom树中的位置相关
> {: id="20210105153042-ude2x07"}
{: id="20210105153035-e5f64ya"}

| 伪类名                                                                                   | 概述                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`:root`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)                           | 表示作为文档根元素的元素。在 HTML 中，这通常是元素。`<html>`                                                                                                                                                                                                                                                                                                     |
| [`:empty`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty)                         | 匹配没有子元素的元素                                                                                                                                                                                                                                                                                                                                                          |
| [`:nth-child(an+b)`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child)           | 先找到当前元素的全部兄弟元素，然后按位置先后顺序中1开始排序<br />匹配其序号符合 `an+b` 规则的元素，例如`2n+1` `3` `4n`                                                                                                                                                                                                                      |
| [`:nth-last-child(an+b)`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-child) | **同上**但序号分配是从后面开始的                                                                                                                                                                                                                                                                                                                                          |
| [`:first-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child)             | 匹配当前元素的全部兄弟元素中最**前**面的那个元素                                                                                                                                                                                                                                                                                                                  |
| [`:last-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child)               | 匹配当前元素的全部兄弟元素中最**后**面的那个元素                                                                                                                                                                                                                                                                                                                  |
| [`:only-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child)               | 匹配没有兄弟元素的元素                                                                                                                                                                                                                                                                                                                                                       |
| [`:nth-of-type()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type)           | 和 `:nth-child`类似但先排除兄弟元素中与此类型不同的元素再进行排序                                                                                                                                                                                                                                                                                             |
| [`:nth-last-of-type()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-of-type) | **同上**但序号分配是从后面开始的                                                                                                                                                                                                                                                                                                                                          |
| [`:first-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type)         | 参考 `:first-child` 与 `:nth-of-type()`                                                                                                                                                                                                                                                                                                                                              |
| [`:last-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-of-type)           | 参考 `:last-child` 与 `:nth-of-type()`                                                                                                                                                                                                                                                                                                                                               |
| [`:only-of-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type)           | 参考 `:only-child` 与 `:nth-of-type()`                                                                                                                                                                                                                                                                                                                                               |
| [`:has()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:has)                           | ((20210105133946-r1vnroj "🧪")) 代表一个元素，其给定的选择器参数（相对于该元素的 :scope）至少匹配一个元素。<br />`:has()` 伪类接受一个选择器组作为参数。<br />在当前规范中 :has 并未列为实时选择器配置的一部分，<br />意味着其不能用于样式表中，只能用于如 document.querySelector() 的函数中。 |
| [`:host`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host)                           | 选择包含其内部使用的 CSS 的 shadow DOM 的根元素 <br />换句话说，这允许你从其 shadow DOM 中选择一个自定义元素。                                                                                                                                                                                                                                     |
| [`:host()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host())                       | ((20210105133946-r1vnroj "🧪"))选择包含当前shadow Dom且选择器与参数相匹配的元素                                                                                                                                                                                                                                                                                           |
| [`:host-context()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host-context())       | ((20210105133946-r1vnroj "🧪"))选择showdow dom 中的子元素                                                                                                                                                                                                                                                                                                                             |
| [`:is()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is)                             | ((20210105133946-r1vnroj "🧪"))匹配符合一组选择器中某个选择器的元素<br />优先级由这组选择器中最高的选择器决定                                                                                                                                                                                                                                            |
| [`:where()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:where)                       | ((20210105133946-r1vnroj "🧪"))匹配符合一组选择器中某个选择器的元素<br />和`is()`的区别在于此选择器的优先级是0                                                                                                                                                                                                                                              |
| [`:not()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)                           | 匹配不符合一组选择器的元素，又称反选伪类                                                                                                                                                                                                                                                                                                                            |
{: id="20210105160711-doy96zt"}

## 打印伪类
{: id="20210105160400-ejla1l1"}

> 这些伪类用来控制打印文档时候的样式
> {: id="20210105160417-bsgmhiq"}
{: id="20210105160415-edpx24b"}

| 伪类名                                                           | 概述                                        |
| --------------------------------------------------------------------- | ----------------------------------------------- |
| [`:first`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first) | 打印文档的时候，第一页的样式。 |
| [`:left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:left)   | 对打印文档的左侧页设置 CSS 样式. |
| [`:right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:right) | 对打印文档的右侧页设置 CSS 样式. |
{: id="20210105160436-8fal9c6"}

### 其他
{: id="20210105153352-3c9uugv"}

> 这些伪类难以分类
> {: id="20210105160128-szgi58q"}
{: id="20210105160126-9zvj76h"}

| 伪类名                                                                                     | 概述                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`:defined`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:defined)                       | 表示任何已定义的元素。<br />这包括任何浏览器内置的标准元素以及已成功定义的自定义元素<br /> (例如通过 CustomElementRegistry.define() 方法) |
| [`:fullscreen`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:fullscreen)                 | ((20210105133946-r1vnroj "🧪")) `fullscreen应用于当前处于全屏显示模式的元素。` <br />它不仅仅选择顶级元素，还包括所有已显示的栈内元素。           |
| [`:picture-in-picture`](https://developer.mozilla.org/en-US/docs/Web/CSS/:picture-in-picture) | 匹配画中画模式                                                                                                                                                                  |
| [`:state()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:state)                         | ((20210105133946-r1vnroj "🧪")) 匹配元素内部状态处于指定状态的自定义元素                                                                                                |
{: id="20210105162342-bha304d"}

{: id="20210105162038-rswjf7b"}

[^虚指]: 使用指示设备（例如鼠标）控制光标移动到某个元素上
    {: id="20210105144353-2zelhy7"}


{: id="20210105162655-bpr5ds7"}


{: id="20210105091835-cdjfps5" type="doc"}
