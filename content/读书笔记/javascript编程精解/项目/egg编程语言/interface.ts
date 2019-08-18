export interface expr {
    type: type
    value?: Number | string,
    name?: string
    /** 操作符 */
    operator?: expr
    /** 参数 */
    args?: any[]
}


/** 元素类型 */
export enum type {
    value,
    word,
    apply
}