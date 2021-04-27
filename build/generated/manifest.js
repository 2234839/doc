const c = [
	() => import("../../../src/routes/$layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/about.svelte"),
	() => import("../../../src/routes/error.svelte"),
	() => import("../../../src/routes/share/$layout.reset.svelte"),
	() => import("../../../src/routes/share/author.html.svelte"),
	() => import("../../../src/routes/share/backups.svelte"),
	() => import("../../../src/routes/todos/index.svelte"),
	() => import("../../../src/routes/blog/index.svelte"),
	() => import("../../../src/routes/blog/login.svelte"),
	() => import("../../../src/routes/fun/csv.svelte"),
	() => import("../../../src/routes/[...path].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/article/index.json.ts
	[/^\/article\.json$/],

	// src/routes/article/update.ts
	[/^\/article\/update\/?$/],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/error.svelte
	[/^\/error\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/share/author.html.svelte
	[/^\/share\/author\.html\/?$/, [c[5], c[6]], []],

	// src/routes/share/backups.svelte
	[/^\/share\/backups\/?$/, [c[5], c[7]], []],

	// src/routes/todos/index.json.ts
	[/^\/todos\.json$/],

	// src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/todos/[uid].json.ts
	[/^\/todos\/([^/]+?)\.json$/],

	// src/routes/blog/index.svelte
	[/^\/blog\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/blog/auto_update_build.ts
	[/^\/blog\/auto_update_build\/?$/],

	// src/routes/blog/auto_update.ts
	[/^\/blog\/auto_update\/?$/],

	// src/routes/blog/login.svelte
	[/^\/blog\/login\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/blog/feed.ts
	[/^\/blog\/feed\/?$/],

	// src/routes/blog/user/login.ts
	[/^\/blog\/user\/login\/?$/],

	// src/routes/blog/api.ts
	[/^\/blog\/api\/?$/],

	// src/routes/menu/index.json.ts
	[/^\/menu\.json$/],

	// src/routes/test/header.ts
	[/^\/test\/header\/?$/],

	// src/routes/fun/csv.svelte
	[/^\/fun\/csv\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/[...path].svelte
	[/^(?:\/(.*))?\/?$/, [c[0], c[12]], [c[1]], (m) => ({ path: d(m[1] || '')})]
];

export const fallback = [c[0](), c[1]()];