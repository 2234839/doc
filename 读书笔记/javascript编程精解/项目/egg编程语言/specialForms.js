"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
/** 创建平台环境 */
var specialForms = Object.create(null);
specialForms.if = function (args, scope) {
    if (args.length != 3) {
        throw new SyntaxError("Wrong number of args to if");
    }
    else if (evaluate(args[0], scope) !== false) {
        return evaluate(args[1], scope);
    }
    else {
        return evaluate(args[2], scope);
    }
};
/** 第一个表达式求值为true是执行第二个表达式 然后继续这个操作 直到第一个表达式求值为false */
specialForms.while = function (args, scope) {
    if (args.length != 2) {
        throw new SyntaxError("while 需要两个参数");
    }
    while (evaluate(args[0], scope) !== false) { /** 第一个表达式的值决定是否继续执行 */
        evaluate(args[1], scope); /** 需要循环执行的表达式 */
    }
    // 因为egg语言中没有 undefined 所以返回false更有意义
    return false;
};
/** 执行多个表达式 */
specialForms.do = function (args, scope) {
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        evaluate(arg, scope);
    }
    return true;
};
/** 给变量复制 */
specialForms.define = function (args, scope) {
    if (args.length != 2 || args[0].type != interface_1.type.word) {
        throw new SyntaxError("Incorrect use of define");
    }
    var value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;
};
function evaluate(expr, scope) {
    if (expr.type === interface_1.type.value) { /** 表达式是值就直接返回值 */
        return expr.value;
    }
    else if (expr.type === interface_1.type.word) { /** 表达式是词，从作用域中取对应的值 */
        if (expr.name in scope) { /** 该变量在作用域上存在 */
            return scope[expr.name]; /** 返回作用域上变量的值 */
        }
        else {
            throw new ReferenceError("\u672A\u5B9A\u4E49\u7684\u7ED1\u5B9A: " + expr.name);
        }
    }
    else if (expr.type == interface_1.type.apply) { /** apply 表达式是方法 */
        var operator = expr.operator, args = expr.args; /** 取出操作符和参数 */
        if (operator.type == interface_1.type.word &&
            operator.name in specialForms) { /** 操作符是内置方法 */
            return specialForms[operator.name](expr.args, scope); /** 执行操作符，将作用域传递过去 */
        }
        else { /** 求解运算符 */
            var op = evaluate(operator, scope);
            if (typeof op == "function") { /** 验证是不是函数 */
                return op.apply(void 0, args.map(function (arg) { return evaluate(arg, scope); })); /** 执行运算符 */
            }
            else {
                throw new TypeError("这不是一个函数.");
            }
        }
    }
}
exports.evaluate = evaluate;
exports.default = specialForms;
