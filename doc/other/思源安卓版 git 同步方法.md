## 拉取
{: id="20210209163730-gn0jm0o"}

### 第一次的准备
{: id="20210209163803-2fjcm0r"}

1. {: id="20210209161016-ghs9yse"}安装 [思源 apk](https://github.com/siyuan-note/siyuan)
   {: id="20210209161016-34dphg4"}
2. {: id="20210209161050-l0yktoo"}安装 [Termux](https://www.coolapk.com/apk/com.termux)
   {: id="20210209161050-a7s4gdy"}
3. {: id="20210209161315-toro8c6"}在 Termux 中安装 git 相关软件
   {: id="20210209161315-sgakbo9"}

   1. {: id="20210209161234-cb8en8b"}执行命令 `pkg install git`
      {: id="20210209161234-ukh3aqn"}
   2. {: id="20210209161325-rqhoi3r"}执行命令 `pkg install openssh`
      {: id="20210209161325-r978neh"}
   3. {: id="20210209161404-jtjl55h"}[生成 SSH 公钥](https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5)
      {: id="20210209161404-8pq29uy"}
   4. {: id="20210209161607-q1m7ixv"}去相关 git 服务配置好公钥
      {: id="20210209161607-kgksapb"}
   {: id="20210209161235-nk7oovk"}
4. {: id="20210209163424-ai59rqs"}执行命令`termux-setup-storage`让 Termux 获取访问其他目录的权限
   {: id="20210209163423-0u1m2ao"}
5. {: id="20210209163443-swopf2l"}执行命令 `cd ~/storage/shared/siyuan/data/` 进入思源的笔记目录
   {: id="20210209163443-tgbnmpc"}
6. {: id="20210209163540-8y5eckc"}执行命令 `git clone (你的git库的 ssh 地址)` 拉取 git 库
   {: id="20210209163540-bka3y9d"}
7. {: id="20210209163643-ysz5dc8"}在思源 app 中打开该笔记 ，🎉
   {: id="20210209163643-ge0z90n"}
{: id="20210209161010-cks0cpz"}

### 之后的同步方法
{: id="20210209163813-745oa3i"}

1. {: id="20210209164043-wdxwk3t"}`cd ~/storage/shared/siyuan/data/(你的笔记目录)`
   {: id="20210209164043-aarebyt"}
2. {: id="20210209163827-60jbo6m"}执行命令 `git pull`
   {: id="20210209163827-xk4k5yd"}
{: id="20210209163826-231fkgy"}

## 推送
{: id="20210209161204-nqdqosk"}

1. {: id="20210209163847-7uj1ase"}`cd ~/storage/shared/siyuan/data/(你的笔记目录)`
   {: id="20210209163847-pxtn2af"}
2. {: id="20210209164012-5kmbu5q"}执行命令 `add .`
   {: id="20210209164012-c1m76os"}
3. {: id="20210209163929-abewf9t"}执行命令 `git commit -m "更新了文档"`
   {: id="20210209163929-c3v5n00"}
4. {: id="20210209163951-19sda1a"}执行命令 `git push`
   {: id="20210209163951-j29hygb"}
{: id="20210209163752-1vvkea7"}

{: id="20210209165313-t0hal9j"}

{: id="20210209164244-plrha59"}


{: id="20210209161008-nzq3um7" type="doc"}
