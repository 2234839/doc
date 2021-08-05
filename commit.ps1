# @REM scp C:/Users/llej/AppData/Local/Temp/siyuan/siyuan.db root@shenzilong.cn:/root/app/md2website
# @REM scp -r !() D:/code/doc/docHTML root@shenzilong.cn:/root/app/doc
# @REM D:\app2\cwrsync\bin\rsync.exe -avzp -e ssh D:/code/doc/docHTML root@shenzilong.cn:/remote/dir/docHTML
# @REM cd D:/code/doc/
# @REM git add .
# @REM git commit -m "doc"
# @REM git push origin
# @REM git push github

# @REM 从远程服务器克隆存储库
# @REM git clone ssh://root@shenzilong.cn/root/app/git_repo/docHTML
# @REM

# @REM 第一次的时候clone库
# @REM ssh root@shenzilong.cn '
# @REM cd ./app/doc;
# @REM ls;
# @REM git clone ../git_repo/docHTML
# @REM '

cd D:/code/oceanpress
go run ./src/ -SourceDir C:/Users/llej/Documents/SiYuan/data/note -OutDir D:/code/doc/docHTML -TemplateDir D:/code/oceanpress/src/views -SqlitePath C:/Users/llej/Documents/SiYuan/temp/siyuan.db


cd D:/code/doc/docHTML;
git add .;
git commit -m "1";
git push;
cd ..;

echo "== remote =="

# @REM 后面直接拉取就行
ssh root@shenzilong.cn '
cd ./app/doc/docHTML;
git pull;

cd /root/app;
./ossutil64 sync -f -u ./doc/docHTML/ oss://store-llej/doc/
'

ssh root@shenzilong.cn '
# pm2 reload blog-kit;
curl http://localhost:9949/blog/auto_update_build
pm2 log blog-kit;
'