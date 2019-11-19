import { expr,type  } from "./interface";

/** 创建平台环境 */
const specialForms = Object.create(null);

specialForms.if = (args: any[], scope: any) => {
    if (args.length != 3) {
        throw new SyntaxError("Wrong number of args to if");
    } else if (evaluate(args[0], scope) !== false) {
        return evaluate(args[1], scope);
    } else {
        return evaluate(args[2], scope);
    }
};

/** 第一个表达式求值为true是执行第二个表达式 然后继续这个操作 直到第一个表达式求值为false */
specialForms.while = (args: any[], scope: {}) => {
    if (args.length != 2) {
        throw new SyntaxError("while 需要两个参数");
    }
    while (evaluate(args[0], scope) !== false) { /** 第一个表达式的值决定是否继续执行 */
        evaluate(args[1], scope);  /** 需要循环执行的表达式 */
    }
    // 因为egg语言中没有 undefined 所以返回false更有意义
    return false;
};

/** 执行多个表达式 */
specialForms.do = (args: any[], scope: {}) => {
    for (let arg of args) {
        evaluate(arg, scope);
    }
    return true
};

/** 给变量复制 */
specialForms.define = (args: any[], scope: any[]) => {
    if (args.length != 2 || args[0].type != type.word) {
        throw new SyntaxError("Incorrect use of define");
    }
    let value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;
};

export function evaluate(expr: expr, scope: any): any {
    if (expr.type === type.value) { /** 表达式是值就直接返回值 */
        return expr.value;
    } else if (expr.type === type.word) { /** 表达式是词，从作用域中取对应的值 */
        if (expr.name! in scope) { /** 该变量在作用域上存在 */
            return scope[expr.name!];  /** 返回作用域上变量的值 */
        } else {
            throw new ReferenceError(`未定义的绑定: ${expr.name}`);
        }
    } else if (expr.type == type.apply) { /** apply 表达式是方法 */
        let { operator, args } = expr; /** 取出操作符和参数 */
        if (operator!.type == type.word &&
            operator!.name! in specialForms) { /** 操作符是内置方法 */
            return specialForms[operator!.name!](expr.args, scope); /** 执行操作符，将作用域传递过去 */
        } else { /** 求解运算符 */
            let op = evaluate(operator!, scope);
            if (typeof op == "function") { /** 验证是不是函数 */
                return op(...args!.map(arg => evaluate(arg, scope))); /** 执行运算符 */
            } else {
                throw new TypeError("这不是一个函数.");
            }
        }
    }
}


export default specialForms