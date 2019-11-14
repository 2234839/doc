exports.name = 'one';
exports.version = '0.2';

console.log("被加载");
const time = Date.now()

exports.filters = {
  enabled: function (writers, name) {
    return writers.filter(function (writer) {
      return ~writer.indexOf(name)
    }).length;
  },
  description: function (writers, name) {
    let path = writers.match(/href=".\/(.*)"/)
    if (path !== null)
      writers = writers.replace(path[1], path[1] + ".html")
    return writers
  },
  parseA: function (writers, name) {//为a标签加上 html 后缀
    // writers = writers.replace(/href="(\.\.\/|\.\/)(.*?)"/g, function (str, p1, p2, offset, s) {
    //   if (p2.includes('.') === false) {//没有后缀
    //     return `href="${p1}${p2}.html"`
    //   } else {
    //     return str
    //   }
    // });
    return writers
  }
};
