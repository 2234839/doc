# egg 编程语言

- pubdate:2019-08-18 11:24:01
- tags:习题

---

照抄着实现了一个简单的 lisp 语言

````javascript
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
````


{: id="20201104153359-rw2q4l2" type="doc"}
