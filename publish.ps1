cd D:/code/code/oceanPress_js/apps/frontend;
pnpm cli build --config "./store/configs" --output "D:/code/code/doc/docs"

cd D:/code/code/doc
git add .;
git commit -m "update docs";
git push;