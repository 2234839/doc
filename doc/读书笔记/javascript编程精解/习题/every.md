# every

- pubdate:2019-07-09 09:18:30
- tags:习题，JavaScript

---

题目：
类似于 some 方法，数组也有 every 方法。 当给定函数对数组中的每个元素返回 true 时，此函数返回 true。 在某种程度上，some 是作用于数组的 || 运算符的一个版本，every 就像&&运算符。
将 every 实现为一个函数，接受一个数组和一个谓词函数作为参数。编写两个版本，一个使用循环，另一个使用 some 方法。

解 :

````javascript
function every(array, test) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(test(element)===false)
            return false
    }
    return true
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
````


{: id="20201104153359-gj1v86t" type="doc"}
