declare type unPromise<T> = T extends Promise<infer P> ? P : T;
declare type API_Res<T> = T extends (...arg: any) => Promise<infer P> ? P : T;
