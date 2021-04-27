import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "../../src/hooks.ts";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"zh\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<meta name=\"author\" content=\"崮生\" />\n\t\t" + head + "\n\n\t\t<link rel=\"stylesheet\" href=\"/assets/github-markdown-css.css\" />\n\t\t<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/vditor/dist/index.css\" />\n\t\t<script\n\t\t\tasync\n\t\t\tdes=\"谷歌统计\"\n\t\t\tsrc=\"https://www.googletagmanager.com/gtag/js?id=UA-139738006-1\"\n\t\t></script>\n\t\t<script des=\"谷歌统计\">\n\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\tfunction gtag() {\n\t\t\t\tdataLayer.push(arguments);\n\t\t\t}\n\t\t\tgtag('js', new Date());\n\t\t\tgtag('config', 'UA-139738006-1');\n\t\t</script>\n\t\t<script des=\"百度统计\">\n\t\t\tvar _hmt = _hmt || [];\n\t\t\t(function () {\n\t\t\t\tvar hm = document.createElement('script');\n\t\t\t\thm.src = 'https://hm.baidu.com/hm.js?65b233cad1f8e842306698cecb350624';\n\t\t\t\tvar s = document.getElementsByTagName('script')[0];\n\t\t\t\ts.parentNode.insertBefore(hm, s);\n\t\t\t})();\n\t\t</script>\n\t</head>\n\t<body>\n\t\t<script\n\t\t\tdes=\"谷歌广告\"\n\t\t\tdata-ad-client=\"ca-pub-7181140659254262\"\n\t\t\tasync\n\t\t\tsrc=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"\n\t\t></script>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n\t<!-- Start of Site Search 360 Scripts -->\n\t<script type=\"text/javascript\">\n\t\tvar ss360Config = {\n\t\t\tsiteId: 'shenzilong.cn',\n\t\t\tsearchBox: {\n\t\t\t\tselector: '#searchBox'\n\t\t\t}\n\t\t};\n\t</script>\n\t<script src=\"https://cdn.sitesearch360.com/v13/sitesearch360-v13.min.js\" async></script>\n\t<!-- End of Site Search 360 Scripts -->\n\t<script src=\"/assets/font-end-lib/all_components.js\"></script>\n\t<script type=\"text/javascript\" des=\"crisp沟通\">\n\t\twindow.$crisp = [];\n\t\twindow.CRISP_WEBSITE_ID = '3fd4e4ce-c629-4918-9484-2a137064f395';\n\t\t(function () {\n\t\t\td = document;\n\t\t\ts = d.createElement('script');\n\t\t\ts.src = 'https://client.crisp.chat/l.js';\n\t\t\ts.async = 1;\n\t\t\td.getElementsByTagName('head')[0].appendChild(s);\n\t\t})();\n\t</script>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-1d8cc633.js",
			css: ["/./_app/assets/start-8077b9bf.css"],
			js: ["/./_app/start-1d8cc633.js","/./_app/chunks/vendor-07ad4faf.js","/./_app/chunks/preload-helper-9f12a5fd.js","/./_app/chunks/singletons-6b53f818.js"]
		},
		fetched: undefined,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"BingSiteAuth.xml","size":85,"type":"application/xml"},{"file":"_themes/feed.png","size":8874,"type":"image/png"},{"file":"_themes/vanilla-js.png","size":218,"type":"image/png"},{"file":"code.png","size":29410,"type":"image/png"},{"file":"favicon.ico","size":27527,"type":"image/vnd.microsoft.icon"},{"file":"favicon.png","size":27527,"type":"image/png"},{"file":"manifest.json","size":242,"type":"application/json"},{"file":"robots.txt","size":67,"type":"text/plain"},{"file":"root.txt","size":32,"type":"text/plain"},{"file":"shenma-site-verification.txt","size":68,"type":"text/plain"},{"file":"sogousiteverification.txt","size":10,"type":"text/plain"},{"file":"svelte-welcome.png","size":360807,"type":"image/png"},{"file":"svelte-welcome.webp","size":115470,"type":"image/webp"},{"file":"test.html","size":407,"type":"text/html"}],
	layout: "src/routes/$layout.svelte",
	error: ".svelte/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/article\.json$/,
						params: empty,
						load: () => import("../../src/routes/article/index.json.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/article\/update\/?$/,
						params: empty,
						load: () => import("../../src/routes/article/update.ts")
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/about.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/error\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/error.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/share\/author\.html\/?$/,
						params: empty,
						a: ["src/routes/share/$layout.reset.svelte", "src/routes/share/author.html.svelte"],
						b: []
					},
		{
						type: 'page',
						pattern: /^\/share\/backups\/?$/,
						params: empty,
						a: ["src/routes/share/$layout.reset.svelte", "src/routes/share/backups.svelte"],
						b: []
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\.json$/,
						params: empty,
						load: () => import("../../src/routes/todos/index.json.ts")
					},
		{
						type: 'page',
						pattern: /^\/todos\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/todos/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\/([^/]+?)\.json$/,
						params: (m) => ({ uid: d(m[1])}),
						load: () => import("../../src/routes/todos/[uid].json.ts")
					},
		{
						type: 'page',
						pattern: /^\/blog\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/blog/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/blog\/auto_update_build\/?$/,
						params: empty,
						load: () => import("../../src/routes/blog/auto_update_build.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/blog\/auto_update\/?$/,
						params: empty,
						load: () => import("../../src/routes/blog/auto_update.ts")
					},
		{
						type: 'page',
						pattern: /^\/blog\/login\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/blog/login.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/blog\/feed\/?$/,
						params: empty,
						load: () => import("../../src/routes/blog/feed.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/blog\/user\/login\/?$/,
						params: empty,
						load: () => import("../../src/routes/blog/user/login.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/blog\/api\/?$/,
						params: empty,
						load: () => import("../../src/routes/blog/api.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/menu\.json$/,
						params: empty,
						load: () => import("../../src/routes/menu/index.json.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/test\/header\/?$/,
						params: empty,
						load: () => import("../../src/routes/test/header.ts")
					},
		{
						type: 'page',
						pattern: /^\/fun\/csv\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/fun/csv.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^(?:\/(.*))?\/?$/,
						params: (m) => ({ path: d(m[1] || '')}),
						a: ["src/routes/$layout.svelte", "src/routes/[...path].svelte"],
						b: [".svelte/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getContext: hooks.getContext || (() => ({})),
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/$layout.svelte": () => import("../../src/routes/$layout.svelte"),".svelte/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte"),"src/routes/error.svelte": () => import("../../src/routes/error.svelte"),"src/routes/share/$layout.reset.svelte": () => import("../../src/routes/share/$layout.reset.svelte"),"src/routes/share/author.html.svelte": () => import("../../src/routes/share/author.html.svelte"),"src/routes/share/backups.svelte": () => import("../../src/routes/share/backups.svelte"),"src/routes/todos/index.svelte": () => import("../../src/routes/todos/index.svelte"),"src/routes/blog/index.svelte": () => import("../../src/routes/blog/index.svelte"),"src/routes/blog/login.svelte": () => import("../../src/routes/blog/login.svelte"),"src/routes/fun/csv.svelte": () => import("../../src/routes/fun/csv.svelte"),"src/routes/[...path].svelte": () => import("../../src/routes/[...path].svelte")
};

const metadata_lookup = {"src/routes/$layout.svelte":{"entry":"/./_app/pages/$layout.svelte-08e50056.js","css":["/./_app/assets/pages/$layout.svelte-fd704684.css"],"js":["/./_app/pages/$layout.svelte-08e50056.js","/./_app/chunks/vendor-07ad4faf.js","/./_app/chunks/stores-998882df.js","/./_app/chunks/fetch-eb728030.js","/./_app/chunks/message-079fc6df.js"],"styles":null},".svelte/build/components/error.svelte":{"entry":"/./_app/error.svelte-c8b8999c.js","css":[],"js":["/./_app/error.svelte-c8b8999c.js","/./_app/chunks/vendor-07ad4faf.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-f3fd456a.js","css":["/./_app/assets/pages/index.svelte-57c33754.css"],"js":["/./_app/pages/index.svelte-f3fd456a.js","/./_app/chunks/vendor-07ad4faf.js","/./_app/chunks/fetch-eb728030.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-0414c1da.js","css":["/./_app/assets/pages/about.svelte-4db5be0d.css"],"js":["/./_app/pages/about.svelte-0414c1da.js","/./_app/chunks/vendor-07ad4faf.js"],"styles":null},"src/routes/error.svelte":{"entry":"/./_app/pages/error.svelte-604ffa64.js","css":[],"js":["/./_app/pages/error.svelte-604ffa64.js","/./_app/chunks/vendor-07ad4faf.js"],"styles":null},"src/routes/share/$layout.reset.svelte":{"entry":"/./_app/pages/share/$layout.reset.svelte-857e8872.js","css":[],"js":["/./_app/pages/share/$layout.reset.svelte-857e8872.js","/./_app/chunks/vendor-07ad4faf.js"],"styles":null},"src/routes/share/author.html.svelte":{"entry":"/./_app/pages/share/author.html.svelte-decea7dd.js","css":[],"js":["/./_app/pages/share/author.html.svelte-decea7dd.js","/./_app/chunks/vendor-07ad4faf.js"],"styles":null},"src/routes/share/backups.svelte":{"entry":"/./_app/pages/share/backups.svelte-832f1fd2.js","css":[],"js":["/./_app/pages/share/backups.svelte-832f1fd2.js","/./_app/chunks/vendor-07ad4faf.js","/./_app/chunks/stores-998882df.js"],"styles":null},"src/routes/todos/index.svelte":{"entry":"/./_app/pages/todos/index.svelte-eb3c85bf.js","css":["/./_app/assets/pages/todos/index.svelte-d4098fcc.css"],"js":["/./_app/pages/todos/index.svelte-eb3c85bf.js","/./_app/chunks/vendor-07ad4faf.js"],"styles":null},"src/routes/blog/index.svelte":{"entry":"/./_app/pages/blog/index.svelte-366ebf5b.js","css":[],"js":["/./_app/pages/blog/index.svelte-366ebf5b.js","/./_app/chunks/vendor-07ad4faf.js"],"styles":null},"src/routes/blog/login.svelte":{"entry":"/./_app/pages/blog/login.svelte-7d9e2abf.js","css":[],"js":["/./_app/pages/blog/login.svelte-7d9e2abf.js","/./_app/chunks/vendor-07ad4faf.js","/./_app/chunks/message-079fc6df.js"],"styles":null},"src/routes/fun/csv.svelte":{"entry":"/./_app/pages/fun/csv.svelte-c9d3e38e.js","css":[],"js":["/./_app/pages/fun/csv.svelte-c9d3e38e.js","/./_app/chunks/preload-helper-9f12a5fd.js","/./_app/chunks/vendor-07ad4faf.js"],"styles":null},"src/routes/[...path].svelte":{"entry":"/./_app/pages/[...path].svelte-6e25f72e.js","css":[],"js":["/./_app/pages/[...path].svelte-6e25f72e.js","/./_app/chunks/vendor-07ad4faf.js","/./_app/chunks/fetch-eb728030.js","/./_app/chunks/stores-998882df.js","/./_app/chunks/singletons-6b53f818.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["X-Forwarded-Host"];
	return respond({ ...request, host }, options, { prerender });
}