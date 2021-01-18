[typescript 内置实用类型](https://www.typescriptlang.org/docs/handbook/utility-types.html)
{: id="20210118110553-jnbn2bw"}

---

{: id="20210118150831-86khe6l"}

联合类型/或 ： `type a = string | number`
{: id="20210118150831-o9gzcaz"}

获取值的类型 ： `type a = typeof 标识符`
{: id="20210118111833-afs3uvp"}

表示值的类型不会变化 ： `let a = [1, 2] as const`
{: id="20210118112014-n207ycp"}

获取索引的类型 : `type k = keyof {a:1,b:2}` => `k === "a" | "b"`
{: id="20210118111929-v9itsf8"}

[映射类型](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types)  ：如下操作中 k2 就是 k 的映射类型。这里 k2 与 k 是一样的，但 k2 的定义我们有操作空间可以进行改造
{: id="20210118140957-dfjko4e"}

```typescript
type k = {a:1,b:2}

type k2 = {
  [key in keyof k] : k[key]
}
```
{: id="20210118140857-6124u6d"}

- {: id="20210118141005-4hnnw0p"}
{: id="20210118141006-uaruzc4"}

{{{
[条件类型](https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types)（**ts体操万恶之源**）：与 "(20210118140957-dfjko4e "映射类型"") 结合起来可以实现非常有用的一些操作
{: id="20210118141412-e5ez4qf"}

- {: id="20210118141634-vd04dhk"}`type k<T> = T extends U ? X : Y` T 如果可以分配 给 U 则返回 X 否则返回 Y
- {: id="20210118141639-hfxeezv"}实例：`type k<T> = T extends number ? string : boolean`
{: id="20210118141632-7ipbkab"}

可以通过下面这样的条件来筛选联合类型
{: id="20210118145558-oe88tr5"}

```
type a = string | number

type k<T> = T extends string ? never : T

type b = k<a> // number
```
{: id="20210118150048-hk1xvmf"}

}}}
{: id="20210118145939-28vi9fa"}

推断 infer ：只能使用在((20210118145939-28vi9fa "条件类型"))中  `type k<T> = T extends infer R ? R : boolean` 这里使用推断返回了 T 自身，但 infer 更多的是用于获取 T 中的某一部分的类型，例如 T 是一个函数的时候  `type k<T> = T extends (...arg)=>infer R ? R : T` 这里利用 infer 获取 T 的返回值的类型
{: id="20210118145614-qs40rhi"}

## ~~类型保护~~ 缩小类型范围（我认为这样描述更形象贴切）
{: id="20210118135213-jzm19x3"}

`in` , `typeof` , `instanceof` 这三个操作符 ts 都可以自动推断排除操作结果为假的类型
{: id="20210118135541-zjlmobl"}

```typescript
if("swim" in pet){// 还可以改成 pet.swim ,typeof 也有缩小类型范围的功能
//  在这个范围内 pet 的类型被确认为 Fish 了
}
```
{: id="20210118135218-4z32b52"}

自定义类型保护:
{: id="20210118135117-q6jeuqf"}

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
     return (pet as Fish).swim !== undefined;
}
```
{: id="20210118135127-kcn75p2"}


{: id="20210118110553-zmx5glh" type="doc"}
