import type { defaultHandle } from 'src/hooks';

export const get: defaultHandle = async function get() {
	return {
		status: 200,
		body: {}
	};
};

export const post = get;
