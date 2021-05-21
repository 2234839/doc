import { exec } from 'child_process';
import type { defaultHandle } from 'src/hooks';
import { root_path } from '../../lib/env';
import { 获取文档资源 } from '../../lib/资源检索/最近更新';

export const get: defaultHandle = async function get() {
	return {
		status: 200,
		body: { code: 200 }
	};
	/** 更新代码，刷新博客内容 */
	exec('git pull', { cwd: root_path }, (e, stdout) => {
		if (e) {
			console.log('[拉取博客代码失败]', e);
		} else {
			console.log('[拉取博客代码成功]');
			exec(
				`/root/app/md2website/linux_md2website "/root/app/doc/doc" "./docHTML" "/root/app/md2website/views/" "/root/app/md2website/siyuan.db"`,
				{ cwd: root_path },
				(e, stdout) => {
					if (e) {
						console.log('[编译html失败]', e);
					} else {
						/** 去触发一次更新 */
						获取文档资源(true);
						console.log('[编译html成功]', stdout);
					}
				}
			);
			exec(
				`./ossutil64 sync -f -u ../doc/doc oss://store-llej/doc/`,
				{ cwd: '/root/app' },
				(e, stdout) => {
					if (e) {
						console.log('[上传阿里云 oss 失败]', e);
					} else {
						console.log('[上传阿里云 oss 成功]', stdout);
					}
				}
			);
		}
	});
};

export const post = get;
