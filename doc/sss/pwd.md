# 密码

- pubdate: 2019-04-12 17:58:10

---

`````html
<input id="key" type="text" placeholder="请输入密钥">
<br>
<input id="iv"  type="text" placeholder="请输入密钥偏移量">
<br>
<textarea id="value" cols="30" rows="10"></textarea>
<br>
<a class="button" onclick="fun(Encrypt)">加密</a>
<a class="button" onclick="fun(Decrypt)">解密</a>
<pre id="text"></pre>
<script src="/static/aes.js"></script>
<script>
let key =()=> CryptoJS.enc.Utf8.parse($$("#key").value);  //十六位十六进制数作为密钥
const iv =()=> CryptoJS.enc.Utf8.parse($$("#iv").value);   //十六位十六进制数作为密钥偏移量
const $$=(...arg)=>document.querySelector(...arg)

//解密方法
function Decrypt(word) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, key(), { iv: iv(), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

//加密方法
function Encrypt(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key(), { iv: iv(), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
}

function fun(f){
    $$("#text").innerText=f($$("#value").value)
}
</script>
`````


{: id="20201104153359-tk4b0or" type="doc"}
