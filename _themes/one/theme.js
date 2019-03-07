exports.name = 'one';
exports.version = '0.2';

exports.filters = {
  enabled: function(writers, name) {
    return writers.filter(function(writer) {
      return ~writer.indexOf(name)
    }).length;
  },
  description: function(writers, name) {
    let path=writers.match(/href=".\/(.*)"/)
    if(path!==null)
      writers=writers.replace(path[1],path[1]+".html")
    // console.log(writers);
    // console.log('----------------------');
    return writers
  }
};
