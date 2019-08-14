/** ════════════════════════🏳‍🌈 egg 🏳‍🌈════════════════════════
 *  一个简单的语言
 ** ════════════════════════🚧 egg 🚧════════════════════════ */

"egg中一切都是表达式"


interface expr {
    type: type
    value?: Number | string,
    name?: string
    /** 操作符 */
    operator?: expr
    /** 参数 */
    args?: any[]
}

/** 元素类型 */
enum type {
    value,
    word,
    apply
}

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



const specialForms = Object.create(null);

function evaluate(expr: expr, scope: any): any {
    if (expr.type === type.value) { /** 表达式是值就直接返回值 */
        return expr.value;
    } else if (expr.type === type.word) { /** 表达式是词 */
        if (expr.name! in scope) {
            return scope[expr.name!];
        } else {
            throw new ReferenceError(`Undefined binding: ${expr.name}`);
        }
    } else if (expr.type == type.apply) { /** apply */
        let { operator, args } = expr; /** 取出操作符和参数 */
        if (operator!.type == type.word &&
            operator!.name! in specialForms) { /** 操作符是内置方法 */
            return specialForms[operator!.name!](expr.args, scope); /** 执行操作符，将作用域传递过去 */
        } else { /** 求解运算符 */
            let op = evaluate(operator!, scope);
            if (typeof op == "function") { /** 验证是不是函数 */
                return op(...args!.map(arg => evaluate(arg, scope))); /** 执行运算符 */
            } else {
                throw new TypeError("Applying a non-function.");
            }
        }
    }
}

specialForms.if = (args: any[], scope: any) => {
    if (args.length != 3) {
        throw new SyntaxError("Wrong number of args to if");
    } else if (evaluate(args[0], scope) !== false) {
        return evaluate(args[1], scope);
    } else {
        return evaluate(args[2], scope);
    }
};

specialForms.while = (args: any[], scope: {}) => {
    if (args.length != 2) {
        throw new SyntaxError("Wrong number of args to while");
    }
    while (evaluate(args[0], scope) !== false) {
        evaluate(args[1], scope);
    }
    // Since undefined does not exist in Egg, we return false,
    // for lack of a meaningful result.
    return false;
};

specialForms.do = (args: any[], scope: {}) => {
    let value = false;
    for (let arg of args) {
        value = evaluate(arg, scope);
    }
};

specialForms.define = (args: any[], scope: any[]) => {
    if (args.length != 2 || args[0].type != type.word) {
        throw new SyntaxError("Incorrect use of define");
    }
    let value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;
};

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


function run(program:string) {
    return evaluate(parse(program), Object.create(topScope));
}


run(`
do(define(total, 0),
   define(count, 1),
   while(<(count, 11),
         do(define(total, +(total, count)),
            define(count, +(count, 1)))),
   print(total))
`);

""