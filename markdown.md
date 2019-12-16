# markdown 学习

- pubdate: 2019-3-6 17:43
- tags : markdown

---

[[toc]]

## [Markdown：语法](https://daringfireball.net/projects/markdown/syntax#philosophy)

```html{run}
<table>
  <tr>
    <td>markdown中也是可以使用html标签的.</td>
  </tr>
</table>
```

> 引用

```html
> 引用
```

### 列表

- Red
- Green
- Blue

```html
* Red * Green * Blue
```

## 绘图

[怎么使用代码画图](https://github.com/mermaid-js/mermaid)

### 状态图

```mermaid{run}
stateDiagram

## 定义状态
# 1 通过state关键字定义状态和他的描述
state "站立不动" as 静止
# 2 通过 ~ id : 描述 ~ 的方式定义状态
移动 : 向某处移动

## 复合状态

state 跳跃{
  [*] --> 落水 : 跳到水里了
  落水 --> 淹死
  游泳 --> [*]
  淹死 --> [*]
  # 并发 世界非线性
  --
  [*] --> [*] : 跳对了
  --
  [*] --> 落水 : 总感觉我曾经在这里落水过
  落水 --> 游泳

}
## fork
state 抉择 <<fork>>
## 便利贴，可以选择左侧或者右侧
note right of 抉择
    一切都是命运石之门的选择
end note

# [*] 表示开始和结束
[*] --> 静止
# 在过渡语句的最后处添加 : 描述
静止 --> [*] : 天降陨石
静止 --> 抉择
抉择 --> 移动
抉择 --> 跳跃
移动 --> 静止
移动 --> [*]
跳跃 --> [*]
```

### 顺序图

```mermaid{run}
sequenceDiagram
# 定义参与者 通过as语法提供标识符
participant J as John
# 也可以直接用，不需要特意定义
Alice->>J: Hello John, how are you?
J-->>Alice: Great!
```
