# PHP MySQL 查询返回的数据类型不对 全是 string
{: id="20210408131303-h66s9py"}

- {: id="20210408131303-4ek1ri1"}pubdate:2019-08-25 19:13:03
  {: id="20210408131303-hgtd4hy"}
- {: id="20210408131303-4jw7bbj"}tags:php
  {: id="20210408131303-lmpsumr"}
{: id="20210408131303-hu94rhv"}

---
{: id="20210408131303-oz6j8zy"}

## 每个 MySQL 操作查询返回的类型全是 string
{: id="20210408131303-jjjui0r"}

一开始在网上找到说修改 pdo 下面这些选项，但我的项目已经是这样了
{: id="20210408131303-c5n2svs"}

```php
PDO::ATTR_STRINGIFY_FETCHES => false,
PDO::ATTR_EMULATE_PREPARES  => false,
```
{: id="20210408131303-min22g9"}

然后继续找，苦心人天不负 😂 找了大概两个小时发现一篇讲 PHP 数据库驱动的。
然后就去检查 PHP 的数据库驱动
{: id="20210408131303-swq7bei"}

在网上找到了一个这样的脚本 [http://www.q2zy.com/php-pdo 驱动-mysqlnd 折腾记](http://www.q2zy.com/php-pdo%E9%A9%B1%E5%8A%A8-mysqlnd%E6%8A%98%E8%85%BE%E8%AE%B0/)
{: id="20210408131303-4eazcc2"}

```php
<?php
$hasMySQL = false;
$hasMySQLi = false;
$withMySQLnd = false;
$sentence='';

if (function_exists('mysql_connect')) {
    $hasMySQL = true;
    $sentence.= "(Deprecated) MySQL <b>is installed</b> ";
} else
    $sentence.= "(Deprecated) MySQL <b>is not</b> installed ";

if (function_exists('mysqli_connect')) {
    $hasMySQLi = true;
    $sentence.= "and the new (improved) MySQL <b>is installed</b>. ";
} else
    $sentence.= "and the new (improved) MySQL <b>is not installed</b>. ";

// 这句是关键，只有mysqlnd才提供了mysqli_fetch_all
if (function_exists('mysqli_fetch_all')) {
    $withMySQLnd = true;
    $sentence.= "This server is using MySQLnd as the driver.";
} else
    $sentence.= "This server is using libmysqlclient as the driver.";

echo $sentence;
```
{: id="20210408131303-esb99fr"}

一检测果然是驱动太旧了，再翻回当初 ((20201104153359-9xdmm8q "{{.text}}"))  这个文档。坑原来从一开始就挖下了
{: id="20210408131303-90f8n6a" updated="20210408131329"}

解决方案在上面的链接中
{: id="20210408131303-ne23ex2"}

{: id="20210408131437-sohx4we"}


{: id="20201104153359-ie21qk4" type="doc"}
