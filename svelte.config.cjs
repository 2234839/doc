const preprocess = require('svelte-preprocess');
const WindiCSS = require('vite-plugin-windicss').default;
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		hostHeader: 'X-Forwarded-Host',
		vite: {
			ssr: {
				external: [ "fs-extra", "fast-xml-parser", "html-escaper" ],
			},
			build: {
				rollupOptions: {
					external: [ 'async_hooks', "fs", "promises", "path" ]
				}
			},
			plugins: [
				WindiCSS(),
			],
		}
	},

};
