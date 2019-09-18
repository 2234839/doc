# ts技巧

- pubdate:2019-08-21 10:35:43
- update:2019-09-18 09:27:08
- tags:typescript,技巧

---------

## [https://www.typescriptlang.org/docs/handbook/utility-types.html](typescript 内置的一些实用类型)

```typescript
function fun(params:number) {
    return ""
}

// 获取函数返回值的类型
type returnType=ReturnType<typeof fun>

interface I_test{
    a:number,
    b:string,
    c:any,
    d:{
        a:number
    }
}

//复用类型 使用 Pick 来选择 需要的类型
type I_test_select_d=Pick<I_test,"d">

//复用类型 使用 Omit 来剔除 不需要的类型
type I_test_remove_a=Omit<I_test,'a'>
```

## 使用typeof获取数组中元素的类型

有时候接收到的数组是别人传过来的，要定义一个数组元素的类型就可以用这个

```typescript

const list=<{a:123}>[]


const temp=list[0]
const el=typeof temp[0]

```
