# PHP 工具函数

- pubdate:2019-08-15 09:39:04
- tags :php

---

## 调试

```php
/**
 * stdout 标准输出,在控制台打印消息
 */
function _log($tag,$string){
    if(is_array($string)){
        $string=json_encode($string);
    };
    $stdout = fopen("php://stdout", "w");
    fwrite($stdout,$tag."\t:: ".$string."\n");
    fclose($stdout);
}
```


{: id="20201104153359-g97yry7" type="doc"}
