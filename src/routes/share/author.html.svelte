<script context="module" lang="ts">
	import { isReqZone, reqZoneGet } from '../../util/reqZone';

	export async function preload() {
		if (isReqZone()) {
			const referrer = reqZoneGet('referrer');
			// 这里之后可以利用页面参数与 引用者 提供一些推荐
			console.log('[referrer]', referrer);
		}
	}
</script>

<a class="flex" href="//shenzilong.cn" target="_blank" title="来这里看崮生发布的其他内容">
	<div class="flex items-end">
		<span>作者：</span>
		<img class="w-10" src="//shenzilong.cn/favicon.ico" alt="崮生头像" />
		<span class="underline">崮生 • 一些随笔 🎨</span>
	</div>
</a>
<a href="mailto:admin@shenzilong.cn" title="非常欢迎邮件来信"> 邮箱 : admin@shenzilong.cn </a>
