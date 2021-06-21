import { BuildDoc } from '$lib/资源检索/资源编译';
import type { defaultHandle } from 'src/hooks';

export const get: defaultHandle = async function get() {
	return {
		status: 200,
		body: await BuildDoc()
	};
};

export const post = get;
