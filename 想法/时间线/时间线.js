"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eNode = /** @class */ (function () {
    function eNode(
    /** 节点名 */ name, 
    /** 内容 */ body, 
    /** 前节点 */ oldNode, 
    /** 子节点 */ childNode, 
    /** 节点的时间id，用这个来区分节点的 */
    timeId) {
        if (timeId === void 0) { timeId = Date.now(); }
        this.name = name;
        this.body = body;
        this.oldNode = oldNode;
        this.childNode = childNode;
        this.timeId = timeId;
    }
    return eNode;
}());
exports.a = 1;
var start = new eNode('一切的起点', {
    type: 1,
    contont: '万物从此发端'
}, [], []);
