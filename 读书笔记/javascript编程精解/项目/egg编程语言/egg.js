"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var specialForms_1 = require("./specialForms");
var interface_1 = require("./interface");
/** ════════════════════════🏳‍🌈 egg 🏳‍🌈════════════════════════
 *  一个简单的语言
 ** ════════════════════════🚧 egg 🚧════════════════════════ */
"egg中一切都是表达式";
/** 解析器 */
function parseExpression(program) {
    program = skipSpace(program);
    var match, expr;
    if (match = /^"([^"]*)"/.exec(program)) { /** 匹配字符串 */
        expr = { type: interface_1.type.value, value: match[1] };
    }
    else if (match = /^\d+/.exec(program)) { /** 匹配数值 */
        expr = { type: interface_1.type.value, value: Number(match[0]) };
    }
    else if (match = /^[^\s(),"]+/.exec(program)) { /** 匹配单词 */
        expr = { type: interface_1.type.word, name: match[0] };
    }
    else {
        throw new SyntaxError("Unexpected syntax: " + program);
    }
    /** 返回检测出来的一个元素和剩余的字符串 */
    return parseApply(expr, program.slice(match[0].length));
}
/** 跳过空白 */
function skipSpace(str) {
    var first = str.search(/\S/);
    if (first === -1)
        return '';
    return str.slice(first);
}
function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") {
        return { expr: expr, rest: program };
    }
    program = skipSpace(program.slice(1));
    expr = { type: interface_1.type.apply, operator: expr, args: [] };
    while (program[0] != ")") {
        var arg = parseExpression(program);
        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] == ",") {
            program = skipSpace(program.slice(1));
        }
        else if (program[0] != ")") {
            throw new SyntaxError("Expected ',' or ')'");
        }
    }
    return parseApply(expr, program.slice(1));
}
function parse(program) {
    var _a = parseExpression(program), expr = _a.expr, rest = _a.rest;
    if (skipSpace(rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    }
    return expr;
}
var topEnv = Object.create(null);
var topScope = {
    true: true,
    false: false,
    print: function (value) {
        console.log(value);
        return value;
    }
};
/** 通过Function构造简单的+-/*之类的 */
for (var _i = 0, _a = ["+", "-", "*", "/", "==", "<", ">"]; _i < _a.length; _i++) {
    var op = _a[_i];
    var fun_str = "return a " + op + " b;";
    topScope[op] = Function("a, b", fun_str);
}
function run(program) {
    return specialForms_1.evaluate(parse(program), Object.create(topScope));
}
exports.run = run;
run("\ndo(define(total, 0),\n   define(count, 1),\n   while(<(count, 11),\n         do(define(total, +(total, count)),\n            define(count, +(count, 1)))),\n   print(total),\n   define(a,10),\n   define(a,+(a,5)),\n   print(a)\n)\n");
// run(`
// do(
//     define(i,1),
//     while(<(i,10),do(
//         define(j,1),
//         define(str,""),
//         while(<(j,+(i,1)),do(
//             define(s,+(+(+(+(j,"*"),i),"="),*(i,j))),
//             define(str,+(+(str,s),"\t")),
//             define(j,+(j,1))
//         )),
//         print(str),
//         define(i,+(i,1))
//     ))
// )
// `)
