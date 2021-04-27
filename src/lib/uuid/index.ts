/** 生成uuid，格式为 1602746236266-da76f98019d6 前半部分是生产此 uuid 的时间，后半部分是随机字符串 */
export function uuid(): string {
  var s = [] as any;
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 12; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  return `${Date.now()}-${s.join("")}`;
}
