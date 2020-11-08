/** 解开 promise 类型包装 */
declare type unPromise<T> = T extends Promise<infer R> ? R : T;
