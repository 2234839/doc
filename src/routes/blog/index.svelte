<script context="module">
	const toDay = new Date();
	export function load({ params, query }) {
		return {
			props: {
				menu: [
					{
						title: '博文',
						list: [
							{
								path: `/record/每日总结/${toDay.getFullYear()}/${toDay.getMonth() + 1}月.html`,
								title: `这个月的每日总结（${toDay.getFullYear()}-${toDay.getMonth() + 1}）`
							},
							{
								path: `/record/每日总结/${toDay.getFullYear()}/`,
								title: `每日总结-${toDay.getFullYear()}`
							},
							{ path: '/record/', title: '记录' },
							{ path: '/杂记/', title: '杂记' },
							{ path: '/文集/', title: '文集' },
							{ path: '/工具/代码片段.html', title: '代码片段' }
						]
					}
					// {
					//   title: "管理",
					//   list: [
					//     { path: "/blog/login", title: "登录" },
					//     { path: "/blog/edit", title: "编辑" },
					//     { path: "/page/rss.html", title: "rss推送" },
					//   ],
					// },
				]
			}
		};
	}
</script>

<script>
	export let menu;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

{#each menu as menuItem}
	<h2>{menuItem.title}</h2>

	<ul>
		{#each menuItem.list as item}
			<li><a rel="prefetch" href={item.path}>{item.title}</a></li>
		{/each}
	</ul>
{/each}
