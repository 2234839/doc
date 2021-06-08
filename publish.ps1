cd D:/code/doc/;
npm run build;
scp -r D:/code/doc/.svelte-kit/build root@shenzilong.cn:/root/app/doc/.svelte-kit;
scp -r D:/code/doc/.svelte-kit/output root@shenzilong.cn:/root/app/doc/.svelte-kit;

ssh root@shenzilong.cn '
cd /root/app/doc;
git pull;
pnpm i;
pm2 reload blog-kit;
pm2 log blog-kit;
'