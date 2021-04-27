import { get, Writable } from "svelte/store";

/** 更好的解开svelte 存储函数，保障类型的正确 */
export function read<T>(v: Writable<T>): T {
  return get(v);
}
