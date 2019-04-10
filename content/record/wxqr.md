# 微信扫码

- pubdate: 2019-04-08 10:56:28

---------------

## 先引入微信的js文件

````html
<script src="/static/jquery-3.3.1.min.js"></script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
````

## 判断是不是在微信内的方法

````javascript
function isWeiXin(){
　　var ua = window.navigator.userAgent.toLowerCase();
　　if(ua.match(/MicroMessenger/i) == 'micromessenger'){
　　　　return true;
　　}
　　else{
　　　　return false;
　　}
}
````

## 调用微信扫一扫

````javascript
$.ajax('http://dfpay.ltoyun.com/wx/sweep/es',{
	data:{
	    url:encodeURIComponent(location.href.split('#')[0]),
        state:'fxmtest123'
	},
	dataType:'json',//服务器返回json格式数据
	type:'get',//HTTP请求类型
	timeout:10000,//超时时间设置为10秒；
	success:function(r){
        console.log(r)
        // return
		wx.config({
            debug: true, // 开启调试模式
            appId:r.data.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
            timestamp:r.data.timestamp, // 必填，生成签名的时间戳
            nonceStr:r.data.noncestr, // 必填，生成签名的随机串
            signature:r.data.signature,// 必填，签名，见附录1
            jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
	},
	error:function(xhr,type,errorThrown){
		alert("获取失败")
	}
});
wx.ready(function() {
    wx.scanQRCode({  
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
            alert(res);
        }
    });
});
````