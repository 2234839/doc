- {: id="20210115103824-mm9uoiv"}**时间线**
  - {: id="20210115103827-xpxmkjm"}2021/1/3 在 seeedstudio 下的单, 商品上写的 4月6号之前发货以为要等很久
  - {: id="20210115104001-fsjltrl"}2021/1/13 号就收到了，因为其他人退款就排到我了
    - {: id="20210115104042-zy8i2b0"}晚上尝试烧录系统，结果 sd 卡挂了，sd 卡用的乔安监控配发的，真的垃圾...
    - {: id="20210115104133-unnbhf9"}又下单了两张闪迪的，等待中....
    - {: id="20210116134937-6edtq4c"}因为发热的问题一并买了个 `4cm * 4cm * 1cm` 的小风扇
    {: id="20210115104051-atwlkz0"}
  - {: id="20210116134844-yn8jifd"}2021/1/16 风扇到手了，正好和开发板的体积差不多
    - {: id="20210116145829-b2vhdu8"}![风扇与linux开发版大小对比.jpg](assets/20210116145844-aaahyi5-风扇与linux开发版大小对比.jpg){: style="width: 350px;"}![linux开发板上风扇下.jpg](assets/20210116150209-6zxtgbc-linux开发板_上-风扇_下.jpg){: style="width: 350px;"}
    - {: id="20210116135109-d0u6mh6"}sd 卡淘宝显示今天到，但还没到海宁，难等 💔
      - {: id="20210116135241-b241bwr"}就在敲完上面那段话后淘宝提示到海宁了，惊喜啊
      {: id="20210116135243-xn37jus"}
    - {: id="20210116135515-mijpeo2"}风扇的电源线是 A1 插口的，我没有办法这样给他提供电，需要改成 usb 的
      - {: id="20210116135713-jzbboy5"}[usb 数据线接口定义](https://baike.baidu.com/item/USB%E6%95%B0%E6%8D%AE%E7%BA%BF) 待会拆一个 usb 线给风扇接上
      - {: id="20210116150229-9y0mbkw"}蹩脚的接线![蹩脚的接线.jpg](assets/20210116150234-ma4h4g9-蹩脚的接线.jpg){: style="width: 350px;"}
      {: id="20210116135714-w76qbxk"}
    - {: id="20210116154133-f8xjl6r"}15:30 sd 卡到了，开始((20210116154846-dsm0hhl "{{.text}}")) ，希望这次不要出问题
    - {: id="20210116165145-f4g0ja5"}16:51 ok，成功了
    {: id="20210116135109-8aqw3bv"}
  {: id="20210115103828-1jjtfck"}
{: id="20210115103810-p651z39"}

{: id="20210116154847-wy22lq9"}

## 系统烧录
{: id="20210116154846-dsm0hhl"}

- {: id="20210116154912-51c82v5"}按照这里的流程 [https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#step2-sd](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#step2-sd) 走到 远程桌面连接
- {: id="20210116155005-rndtapi"}进入桌面打开 GParted 查看 emmc 的块数量，我的是 30777343
- {: id="20210116164914-6gfwqfx"}然后执行dd命令，这里要注意 count 的值是 emmc 的块数量
  - {: id="20210116164952-ihlk8a1"}`sudo dd if=/dev/mmcblk0 of=/dev/mmcblk1 bs=512 count=30777343 &sudo watch -n 5 pkill -USR1 ^dd$`
  {: id="20210116165021-grj92s1"}
- {: id="20210116165048-k8wbm8c"}等到成功后输入 halt 关机，断电拔卡再通电就启动成功了
{: id="20210116154857-bsoi7gl"}

## 一些有用的命令
{: id="20210116165245-mompxkq"}

| 命令  | 作用                                              |
| --------- | ----------------------------------------------------- |
| `s-tui` | 可视化查看系统运行信息，温度之类的 |
|         |                                                     |
{: id="20210116165251-ljfsgoh"}

## 资源
{: id="20210115104306-dqaznmc"}

[seeedstudio 提供的教程](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_11)
{: id="20210115104312-8mgs58s"}

[[同好写的文档] quark-n 的一些使用技巧](https://github.com/coolflyreg/quark-n)
{: id="20210115104330-m48tnyx"}

[稚晖君 github 超迷你模块化卡片电脑计划](https://github.com/peng-zhihui/Project-Quantum)
{: id="20210116134718-i9n4rcr"}

{: id="20210116174911-uabj9mr"}

[设置 ubuntu  系统为中文](https://game.cangyoudao.cn/archives/752)
{: id="20210116174911-qy6udav"}

{: id="20210116165451-6mzd4vf"}


{: id="20210115103808-12zcrqu" type="doc"}
