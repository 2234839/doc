# js实现撤销功能

- pubdate: 2019-05-09 21:47:58
- tags: typescript,撤销

-----------

## ctrl+z 是非常厉害的功能

我最近在做的一个油猴脚本[网页文本编辑](https://greasyfork.org/zh-CN/scripts/372082-%E7%BD%91%E9%A1%B5%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91-%E5%81%9A%E7%AC%94%E8%AE%B0%E7%9A%84%E5%A5%BD%E9%80%89%E6%8B%A9)需要实现撤销这类功能，我自己思考的几个方法都较为繁琐

于是找了一下，受到了[如何使用C++实现撤销栈（Undo Stack）？](https://www.zhihu.com/question/315923538/answer/622733270)的启发，最终实现了简单的撤销和重做

## 具体的实现

应为该油猴脚本还在更新，所以最新的代码在[github-userJS-网页笔记](https://github.com/2234839/userJS/tree/master/%E7%BD%91%E9%A1%B5%E7%AC%94%E8%AE%B0)可以查看

我使用的方式就是让每个命令都有do、undo、redo方法，从而每个命令都能够被缓存以及撤销和重做

关于命令的接口我是这样定义的，每个实际的命令都是实现这个接口

```typescript
/** 每一个命令都应该实现的东西 */
interface Command {
    /** 执行这个命令 */
    do(): this
    /** 撤销这个命令 */
    undo(): this
    /** 重新执行命令 */
    redo(): this
}
```

命令控制器的接口定义：

```typescript
/** 命令控制器的接口 */
interface CommandControl {
    /** 命令栈，执行过的 */
    commandStack: Command[]
    /** 撤销栈，被撤销的命令 */
    backoutStack: Command[]
    /** 向命令栈中添加一个命令 */
    pushCommand(command: Command): number
    /** 执行一个命令并加入命令栈，清空撤销栈 */
    run(command: Command): number
    /** 撤销最后一个命令并加入撤消栈 */
    backout(): number
    /** 重做,重做撤销栈中的命令,命令会被转移至命令栈 */
    reform():number
}
```

命令控制器的实现，最终实现之后发现没有自己一开始想的那么复杂，但让我自己做估计是想不到这种实现方式的

```typescript
/** 命令控制器 */
export const CommandControl: CommandControl = {
    commandStack: [],
    backoutStack: [],
    pushCommand(command: Command) {
        return this.commandStack.push(command)
    },
    run(command: Command) {
        this.backoutStack.splice(0,this.backoutStack.length)
        return this.pushCommand(command.do())
    },
    backout() {
        if (this.commandStack.length===0){
            console.warn('命令栈已空，无法进行撤销');
            return
        }
        const command=this.commandStack.pop()
        return this.backoutStack.push(command.undo())
    },
    reform(){
        if (this.backoutStack.length === 0) {
            console.warn('撤销栈已空，无法进行重做');
            return
        }
        const command = this.backoutStack.pop()
        return this.commandStack.push(command.redo())
    }
}
```

一个命令的示例

```typescript
/** 删除一个元素 */
export class deleteSelect implements Command {
    selectEL: HTMLElement
    selectEL_display: string
    constructor(/** 要被删除的元素 */ select: HTMLElement) {
        this.selectEL = select
    }
    do() {
        this.selectEL_display = this.selectEL.style.display
        this.selectEL.style.display = "none"
        return this
    }
    undo() {
        this.selectEL.style.display = this.selectEL_display
        return this
    }
    redo() {
        this.do()
        return this
    }
}
```