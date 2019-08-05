class Node {
    constructor(
        /** 节点名 */ public name:string,
        /** 内容 */ public body:Body,
        /** 节点的时间id，用这个来区分节点的 */
        public timeId=Date.now(),) {

    }
}

interface Body{
    /** body类型，用以决定怎么解析 */ type:1|2
    /** 携带的内容 */ contont:any
}

export const a = 1