# FizzBuzz

- pubdate:2019-07-04 15:25:47
- tags:习题，JavaScript

---

题目：

1. 编写一个程序，使用 console.log 打印出从 1 到 100 的所有数字。不过有两种例外情况：当数字能被 3 整除时，不打印数字，而打印"Fizz"。当数字能被 5 整除时（但不能被 3 整除），不打印数字，而打印"Buzz"。
2. 当以上程序可以正确运行后，请修改你的程序，让程序在遇到能同时被 3 与 5 整除的数字时，打印出"FizzBuzz"。
   （这实际上是一个面试问题，据说剔除了很大一部分程序员候选人，所以如果你解决了这个问题，你的劳动力市场价值就会上升。）

1-> 解：

````javascript
for (let i = 0; i <=100; i++) {
    if(i%3===0){
        console.log('Fizz');
        continue
    }
    if(i%5===0){
        console.log('Buzz');
        continue
    }
    console.log(i);
}
````

2-> 解：

````javascript
for (let i = 0; i <=100; i++) {
    if(i%3===0 && i%5===0){
        console.log('FizzBuzz');
        continue
    }
    if(i%3===0){
        console.log('Fizz');
        continue
    }
    if(i%5===0){
        console.log('Buzz');
        continue
    }
    console.log(i);
}
````


{: id="20201104153359-9fw3wmp" type="doc"}
