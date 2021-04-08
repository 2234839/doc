# typescript 中文手册
{: id="20210408131217-p5czuqc"}

- {: id="20210408131217-6iozc08"}pubdate: 2019-07-25 14:54:20
  {: id="20210408131217-1qjnmj2"}
- {: id="20210408131217-1n2cl8o"}tags :typescript，读书，index
  {: id="20210408131217-xdp620k"}
{: id="20210408131217-02bdw1l"}

看过几次但都不够仔细，所以今天打算仔细读读。这里也只会记录我没映像或者理解错的 。
{: id="20210408131217-dw9zg75"}

((20201104153359-whnn14z "{{.text}}"))
{: id="20210408131217-noja6kf" updated="20210408131227"}

---
{: id="20210408131217-zl7dwl7"}

[原文地址](https://typescript.bootcss.com/interfaces.html)
{: id="20210408131217-bgmghp9"}

## 只读属性
{: id="20210408131217-s9qgjny"}

在属性前面加上 readonly 标记就好了
{: id="20210408131217-2m2djl2"}

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}
```
{: id="20210408131217-yxnbjdx"}

TypeScript 具有 ReadonlyArray<T>类型，它与 Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
{: id="20210408131217-36d5sue"}

```typescript
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```
{: id="20210408131217-2loxxfe"}

## protected 受保护的修饰符
{: id="20210408131217-vxtnbst"}

protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected 成员在派生类中仍然可以访问。
{: id="20210408131217-dmlqcrp"}

## 参数属性
{: id="20210408131217-tsk6fhc"}

private 修饰符也可以替换为 public 之类的。在构造函数的参数上使用这些修饰符等同于在类中定义了这样的属性。
{: id="20210408131217-n3ql442"}

```typescript {run}
class Animal {
  constructor(private name: string) {}
  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```
{: id="20210408131217-p5wrtm0"}

## 抽象类 abstract
{: id="20210408131217-mtc6a2g"}

抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。
{: id="20210408131217-ih7k9la"}

```typescript
abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log("Department name: " + this.name);
  }
  abstract printMeeting(): void; // 必须在派生类中实现
}
```
{: id="20210408131217-wulzq7j"}

## 默认值参数可以放在前面
{: id="20210408131217-4fqg00z"}

但必须显式的传入 undefined 来获得它的默认值
{: id="20210408131217-gbtc8ck"}

```typescript
function add(a = 7, b: number) {
  return a + b;
}
add(undefined, 10); //17
```
{: id="20210408131217-ktlo1fm"}

## this 参数
{: id="20210408131217-mzv2oix"}

函数可以定义一个 this 参数并指定本函数运行时 this 时啥样的
{: id="20210408131217-c2pqt1s"}

```typescript
function A(this: String) {
  //虽然定义了this参数但这个参数是不要传的
  return this.trim();
}

class Str extends String {
  b = A;
}

const str1 = new Str();
str1.b();
A(); //报错 因为this不为String
A(""); //报错 因为不用传参
```
{: id="20210408131217-jx2z12n"}


{: id="20201104153359-0zkt74n" type="doc"}
