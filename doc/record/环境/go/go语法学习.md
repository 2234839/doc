# 崮生的 go 速览
{: id="20201110231020-zdgkdst" updated="20210422124315"}

我打算先从这开始了解 go 的语法 [30 分钟上手 GO 语言--基础语法](https://studygolang.com/topics/548)
{: id="20210422122331-v3mvknq" updated="20210422124318"}

## 基本语法
{: id="20210422122331-rmdschc"}

`package main` package 声明一个包，程序运行入口是包 `main`
{: id="20210422122331-pwm2alz"}

`import "fmt"`
{: id="20210422122331-w9mtgeh"}

### 变量声明
{: id="20210422124020-eyt8inr" updated="20210422124155"}

```go
var firstName string  // 声明一个名为 firstName 的 string 类型变量
var firstName, lastName string // 声明同类型的多个变量
const HTTPStatusOK = 200 // 常量
var ( // 少写 var/const 的语法糖
    firstName, lastName string
    age int
)
//----变量初始化 ----
var (
    firstName string = "John"
    lastName  string = "Doe"
    age              = 32 // go 可以不显示标识类型而自动推断类型
)
var (// 少写 = 的语法糖
    firstName, lastName, age = "John", "Doe", 32
)
func main() {
    age := 32  // 使用 := 声明了一个新变量，相当于 var age = 32
    firstName, lastName := "John", "Doe"
}
```
{: id="20210422124026-1oxneyf" updated="20210422124811"}

### 类型
{: id="20210422122331-25c0rxb" updated="20210422130341"}

```go
bool
string
int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr
byte // uint8 的别名
rune // int32 的别名// 代表一个Unicode码
float32 float64
complex64 complex128
```
{: id="20210422122331-1d7h22s"}

变量在**定义时没有明确的初始化时会赋值为零值**。数值类型为 `0`，布尔类型为 `false`，字符串为 `""`。
{: id="20210422122331-amqrbz4"}

#### 类型转换
{: id="20210422122331-t1wcf2e" updated="20210422130350"}

Go 的在不同类型之间的项目赋值时需要显式转换。表达式 T(v) 将值 v 转换为类型 `T`。比如：
{: id="20210422122331-rotklga"}

```go
var integer16 int16 = 127
var integer32 int32 = 32767
println(int32(integer16) + integer32)
```
{: id="20210422122331-rdzoo8w"}

### 函数
{: id="20210422130610-rcutnhj" updated="20210422130711"}

```go
func sum(int1 int, int2 int) (int, int) { // go 可以返回多个值
    return int1 + int2, int1
}
func sum(int1 int, int2 int) (result int) { // 可以给返回值设置名称，不建议这样写
    result = int1 + int2
    return 
}
func main() {
// 使用 _ 来忽略自己不需要的结果（因为不使用的变量在go中会报错，不接收全部返回结果也会报错）
    s, _ = sum(1, 2) 
}
```
{: id="20210422130712-8j6pdsz" updated="20210422131442"}

### 指针
{: id="20210422122331-n7qekbo"}

> Go 是“按值传递”编程语言。 这意味着每次向函数传递值时，Go 都会使用该值并创建本地副本（内存中的新变量）。 在函数中对该变量所做的更改都不会影响你向函数发送的更改。
> {: id="20210422131914-gyqirs5" updated="20210422131920"}
{: id="20210422131900-zvb1fff" updated="20210422131914"}

指针可以让我们传递变量的地址，从而可以修改变量的值
{: id="20210422131927-dwt2375" updated="20210422132243"}

* {: id="20210422132122-916fhfk"}`&` 运算符取其后对象的地址
  {: id="20210422132122-tc8a3or" updated="20210422132150"}
* {: id="20210422132122-o3bb3fi"}`*` 取其后地址的所存放的值
  {: id="20210422132122-01mgmg9" updated="20210422132158"}
{: id="20210422132122-uryc0ub"}

```go
func main() {
    var p *int
    i := 42
    p = &i // & 取地址 
    fmt.Println(*p) // 通过指针 p 读取 i
    *p = 21         // 通过指针 p 设置 i

    int1 := 1
    s, _ := sum(&int1, 2)
    println(int1, s) // 2 4   // 这里可以看到  int1 的值发生了变化
}
func sum(int1 *int, int2 int) (int, int) {
	*int1 = int2
	return *int1 + int2, *int1
}
```
{: id="20210422122331-tt5t3a8" updated="20210422132256"}

### [包（模块）](https://docs.microsoft.com/zh-cn/learn/modules/go-variables-functions-packages/4-packages)
{: id="20210422132404-ximibso" updated="20210422140600"}

```go
go mod init github.com/用户名/模块名 // 在模块目录下执行此命令创建模块的描述文件
```
{: id="20210422133544-jfoo84x" updated="20210422133544"}

```go
package test // 声明当前代码属于 test 包

import "math/rand"

rand.Int()

// Version 大写字符开头的变量将在 test 包内共享，否则仅在当前文件共享
var Version = "1.0"
```
{: id="20210422132416-79lfxkm" updated="20210422132454"}

### 控制流
{: id="20210422141427-r8crgfe" updated="20210422141432"}

```go
package main

import "fmt"

func main() {
    x := 27
    if x%2 == 0 { // 小括号可以省略
        fmt.Println(x, "is even")
    } else if num < 10 {
        fmt.Println(num, "has only one digit")
    } else {
        fmt.Println(num, "has multiple digits")
    }
    // 这里声明的 num 变量仅在这里的全部 if 分支中可用，if 块外不可
    if num := givemeanumber(); num < 0 {
        fmt.Println(num, "is negative")
    }
    switch i {// 这里的 i 可以不传
        case 0:
            fmt.Print("zero...")
            fallthrough // 继续下一个 case ，其他语言一般默认继续，go 默认 break
        case 1:
            fmt.Print("one...")
        case 2, 3: // 支持多个表达式
            fmt.Print("two...")
        case i == 4: // 这里可以直接使用表达式
            fmt.Print("four...")
        default:
            fmt.Print("no match...")
    }

    for i := 1; i <= 100; i++ {
        fmt.Println(i)
    }
    for x!= 5 { // 当 x == 5 时才会停止
        x= rand.Int63n(15)
        if num%5 == 0 {
            continue
        }
        fmt.Println(x)
    }
    for { // 一直循环
        fmt.Println(x)
        break
    }
}
```
{: id="20210422141433-0imo5a4" updated="20210422142703"}

#### [defer、panic 和 recover](https://docs.microsoft.com/zh-cn/learn/modules/go-control-flow/4-use-defer-statement)
{: id="20210422142816-8fkfnnh" updated="20210422142939"}

```go
package main

import "fmt"

func main() {
    defer func() {
        // 这里 recover 可以接收到下面 panic 的结果，阻止程序崩溃
        if r := recover(); r != nil {
            fmt.Println("Recovered in main", r)
        }
    }()
    for i := 1; i <= 4; i++ {
        // 延迟到 main 执行完毕再逆序（从调用栈底开始）执行，可用于避免忘记任务（例如关闭文件）
        defer fmt.Println("deferred", -i) 
        fmt.Println("regular", i)
    }
    // 糟了，类似于 throw err
    panic("不爱了，毁灭吧")
}
```
{: id="20210422142841-lrfpjte" updated="20210422143150"}

### 复杂结构
{: id="20210425100550-349fqee" updated="20210425100556"}

#### 数组
{: id="20210425100851-yhblau2" updated="20210425100854"}

```go
var a [3]int // 数组，必须声明类型与长度
// 数组初始化方式 1
cities := [5]string{"New York", "Paris", "Berlin", "Madrid"}
// 在知道有多少数据的情况下自动推断数组长度的语法糖
q := [...]int{1, 2, 3}
```
{: id="20210425100557-iixw7jm" updated="20210425100602"}

## 怎么运行
{: id="20210422122331-06wt2si"}

```
go run main.go
```
{: id="20210422122331-afo2lcm"}

### 怎么导入依赖
{: id="20210422122331-xgjj4yo"}

`go mod init`
{: id="20210422122331-6weiex3" updated="20210422122358"}


{: id="20201110231008-4kvyoy9" type="doc"}
