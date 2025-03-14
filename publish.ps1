cd /home/gs/opensource_code/oceanpress/apps/frontend;
pnpm cli build --config "./store/configs" --output "/home/gs/opensource_code/doc/docs"

cd /home/gs/opensource_code/doc
git add .;
git commit -m "update docs";
git push;