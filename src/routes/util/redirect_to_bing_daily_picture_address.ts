import Axios from 'axios';
import type { defaultHandle } from 'src/hooks';
const store = {
	必应地址: {
		time: new Date(),
		path: ''
	}
};
export const get: defaultHandle = async function get() {
	// !moment(Date.now()).isSame(store.必应地址.time, 'day')
	if (
		store.必应地址.path === '' ||
		new Date().toDateString() !== store.必应地址.time.toDateString()
	) {
		const base = 'https://cn.bing.com';
		const res = await Axios({
			url: base + '/HPImageArchive.aspx?format=js&idx=0&n=1',
			method: 'GET',
			responseType: 'json'
		});
		const path = base + res.data.images[0].url;
		store.必应地址 = {
			time: new Date(),
			path
		};
	}
	return { status: 302, headers: { location: store.必应地址.path } };
};
