import type { Locals } from '$lib/types';
import { BuildDoc } from '$lib/资源检索/资源编译';
import type { RequestHandler } from '@sveltejs/kit';
import type { JSONValue } from '@sveltejs/kit/types/endpoint';

export const get: RequestHandler<Locals, FormData> = async function get() {
	return {
		status: 200,
		body: await BuildDoc() as unknown as JSONValue
	};
};

export const post = get;
