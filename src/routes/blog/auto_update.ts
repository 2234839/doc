import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import type { JSONValue } from '@sveltejs/kit/types/endpoint';

export const get:  RequestHandler<Locals, FormData>  = async function get() {
	return {
		status: 200,
		body: { code: 200 }  as unknown as JSONValue
	};
};

export const post = get;
