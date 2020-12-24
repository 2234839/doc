# iOS 网页安装

- pubdate: 2019-03-17 18:05:58
- tags : iOS，应用安装

---

url 参数指向 plist 文件

该文件需要填下列参数
--------------------

| url               | 文件下载地址 |
| ----------------- | ------------------ |
| bundle-identifier | appid              |
| bundle-version    | 版本             |
| title             | 标题             |

````html
<a class="button"
   href="itms-services://?action=download-manifest&url=https://shenzilong.cn/record/res/gac.plist">安装ipa</a>
````


{: id="20201104153359-4x44rpk" type="doc"}
