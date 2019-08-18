# egg编程语言

- pubdate:2019-08-18 11:24:01
- tags:习题

---------

照抄着实现了一个简单的lisp语言

```javascript
requireTs(['./egg.ts'], function ({
    run
}) {
    console.log("运行egg");

    run(`
    do(
        define(i,1),
        while(<(i,10),do(
            define(j,1),
            define(str,""),
            while(<(j,+(i,1)),do(
                define(s,+(+(+(+(j,"*"),i),"="),*(i,j))),
                define(str,+(+(str,s),"\t")),
                define(j,+(j,1))
            )),
            print(str),
            define(i,+(i,1))
        ))
    )
    `)
});
```
