import  {evaluate}  from "./specialForms";
import { expr,type  } from "./interface";

/** ════════════════════════🏳‍🌈 egg 🏳‍🌈════════════════════════
 *  一个简单的语言
 ** ════════════════════════🚧 egg 🚧════════════════════════ */


"egg中一切都是表达式"


/** 解析器 */
function parseExpression(program: string) {
    program = skipSpace(program)
    let match, expr;
    if (match = /^"([^"]*)"/.exec(program)) { /** 匹配字符串 */
        expr = { type: type.value, value: match[1] }
    } else if (match = /^\d+/.exec(program)) { /** 匹配数值 */
        expr = { type: type.value, value: Number(match[0]) }
    } else if (match = /^[^\s(),"]+/.exec(program)) { /** 匹配单词 */
        expr = { type: type.word, name: match[0] };
    } else {
        throw new SyntaxError("Unexpected syntax: " + program);
    }
    /** 返回检测出来的一个元素和剩余的字符串 */
    return parseApply(expr, program.slice(match[0].length))
}

/** 跳过空白 */
function skipSpace(str: string) {
    const first = str.search(/\S/)
    if (first === -1) return ''
    return str.slice(first)
}

function parseApply(expr: expr, program: string): { expr: expr, rest: string } {
    program = skipSpace(program);
    if (program[0] != "(") {
        return { expr: expr, rest: program };
    }

    program = skipSpace(program.slice(1));
    expr = { type: type.apply, operator: expr, args: [] };
    while (program[0] != ")") {
        let arg = parseExpression(program);
        expr.args!.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] == ",") {
            program = skipSpace(program.slice(1));
        } else if (program[0] != ")") {
            throw new SyntaxError("Expected ',' or ')'");
        }
    }
    return parseApply(expr, program.slice(1));
}

function parse(program: string) {
    let { expr, rest } = parseExpression(program);
    if (skipSpace(rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    }
    return expr;
}




const topEnv = Object.create(null);

const topScope: any = {
    true: true,
    false: false,
    print : (value: any) => {
        console.log(value);
        return value;
    }
}

/** 通过Function构造简单的+-/*之类的 */
for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
    const fun_str=`return a ${op} b;`
    topScope[op] = Function("a, b", fun_str);
}


export function run(program:string) {
    return evaluate(parse(program), Object.create(topScope));
}


run(`
do(define(total, 0),
   define(count, 1),
   while(<(count, 11),
         do(define(total, +(total, count)),
            define(count, +(count, 1)))),
   print(total),
   define(a,10),
   define(a,+(a,5)),
   print(a)
)
`);


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

