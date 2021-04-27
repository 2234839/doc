<script lang="ts">
	import { page } from '$app/stores';
	$: path = $page.query.get('path');
</script>

<blockquote cite="暂无，之后应该设置成 备份网页来源页">
	<p class="pl-2">
		<b>* 本页面仅为崮生备份用，内容均来源于互联网公开资料。</b><br />
		备份页面内一般右上角注明了来源，如果您是该备份页面的所有者且不愿意让我公开，请
		<a
			class="c-block-ref"
			href="//shenzilong.cn/%e5%85%b3%e4%ba%8e/%e7%94%b3%e5%ad%90%e9%be%99.html#20201228124011-yky6n68"
		>
			联系我
		</a>，我将屏蔽此页面使其不再对外公开
	</p>
</blockquote>
<iframe title="备份网页" src={path} frameborder="0" class="h-screen w-screen" />
