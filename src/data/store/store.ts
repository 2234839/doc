import { writable } from 'svelte/store';
import { read } from '../../lib/svelte/store';
import { uuid } from '../../lib/uuid';
export const session = writable({});

/** 博客的状态中心 */
export const store = writable({
	uuid: uuid()
});

/** 从本地存储更新 store */
export function updateStore() {
	const oldStore = localStorage.getItem('store');
	if (oldStore) {
		/** 如果新增了其他状态这里只浅拷贝一层是不太行的 */
		store.update((v) => {
			return Object.assign(v, JSON.parse(oldStore));
		});
	}
	store.subscribe(saveStore);
	saveStore();
}

function saveStore() {
	localStorage.setItem('store', JSON.stringify(read(store)));
}
export { messageList } from './message';
