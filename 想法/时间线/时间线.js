class eNode {
    constructor(
    /** 节点名 */ name, 
    /** 内容 */ body, 
    /** 前节点 */ oldNode, 
    /** 子节点 */ childNode, 
    /** 节点的时间id，用这个来区分节点的 */
    timeId = Date.now()) {
        this.name = name;
        this.body = body;
        this.oldNode = oldNode;
        this.childNode = childNode;
        this.timeId = timeId;
    }
}
export const a = 1;
const start = new eNode('一切的起点', {
    type: 1,
    contont: '万物从此发端'
}, [], []);
