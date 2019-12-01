"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 描述道路的数组 */
var roads = [
    "爱丽丝家->鲍勃家", "爱丽丝家->小屋",
    "爱丽丝家->邮局", "鲍勃家->市政厅",
    "达莉亚家->厄尼家", "达莉亚家->市政厅",
    "厄尼家->葛蕾特家", "葛蕾特家->农场",
    "葛蕾特家->商店", "市场->农场",
    "市场->邮局", "市场->商店",
    "市场->市政厅", "商店->市政厅"
];
/** 将描述道路的数组转化为图数据结构 */
function buildGraph(edges) {
    var graph = Object.create(null);
    /** 添加一条边线 */
    function addEdge(from, to) {
        if (graph[from] === undefined) {
            graph[from] = [to];
        }
        else {
            graph[from].push(to);
        }
    }
    for (var _i = 0, _a = edges.map(function (r) { return r.split("->"); }); _i < _a.length; _i++) {
        var _b = _a[_i], from = _b[0], to = _b[1];
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
/** 将数组信息转化为对象图 */
var roadGraph = buildGraph(roads);
console.log(roadGraph);
/** 村庄状态 */
var VillageState = /** @class */ (function () {
    function VillageState(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    VillageState.prototype.move = function (/** 目的地 */ destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        }
        else {
            var parcels = this.parcels.map(function (p) {
                return { place: destination, address: p.address };
            }).filter(function (p) { return p.place !== p.address; }); /** 到地方的包裹去掉当作放到了 */
            return new VillageState(destination, parcels);
        }
    };
    /** 随机生成一个状态 */
    VillageState.random = function (parcelCount) {
        if (parcelCount === void 0) { parcelCount = 5; }
        var parcels = [];
        for (var i = 0; i < parcelCount; i++) {
            var address = randomPick(Object.keys(roadGraph));
            var place = void 0;
            do {
                place = randomPick(Object.keys(roadGraph));
            } while (place === address);
            parcels.push({ place: place, address: address });
        }
        return new VillageState('邮局', parcels);
    };
    return VillageState;
}());
var first = new VillageState("邮局", [{ place: "邮局", address: "爱丽丝家" }]);
var next = first.move("爱丽丝家");
/** 运行机器人 */
function runRobot(state, robot, memory) {
    for (var turn = 0;; turn++) {
        if (state.parcels.length === 0) {
            console.log("\u8DD1\u4E86" + turn + "\u6B21");
            return turn;
        }
        var action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        // console.log(`从${state.place}  移动到  ${action.direction}`);
    }
}
/** 随机选择下一个地址 */
function randomPick(array) {
    var choice = Math.floor(Math.random() * array.length);
    return array[choice];
}
/** 随机走的机器人 */
function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}
/** 巡路机器人 */
function routeRobot(state, memory) {
    if (memory.length === 0) {
        // "爱丽丝家->鲍勃家", "爱丽丝家->小屋",
        // "爱丽丝家->邮局", "鲍勃家->市政厅",
        // "达莉亚家->厄尼家", "达莉亚家->市政厅",
        // "厄尼家->葛蕾特家", "葛蕾特家->农场",
        // "葛蕾特家->商店", "市场->农场",
        // "市场->邮局", "市场->商店",
        // "市场->市政厅", "商店->市政厅"
        memory = ["爱丽丝家", "小屋", "爱丽丝家", "鲍勃家",
            "市政厅", "达莉亚家", "厄尼家",
            "葛蕾特家", "商店", "葛蕾特家", "农场",
            "市场", "邮局"];
    }
    return { direction: memory[0], memory: memory.slice(1) };
}
/**  找到最短的路线，具体算法是从当前点向所有方向推进 当找到目的地的时候返回这条路线 */
function findRoute(graph, from, to) {
    var work = [{ at: from, route: [] }];
    for (var i = 0; i < work.length; i++) {
        var _a = work[i], at = _a.at, route = _a.route;
        var _loop_1 = function (place) {
            if (place === to)
                return { value: route.concat(place) };
            if (!work.some(function (w) { return w.at === place; })) {
                work.push({ at: place, route: route.concat(place) });
            }
        };
        for (var _i = 0, _b = graph[at]; _i < _b.length; _i++) {
            var place = _b[_i];
            var state_1 = _loop_1(place);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    }
    return [];
}
function goalOrientedRobot(_a, route) {
    var place = _a.place, parcels = _a.parcels;
    if (route.length == 0) {
        var parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        }
        else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}
runRobot(VillageState.random(), routeRobot, []);
exports.default = {
    runRobot: runRobot,
    VillageState: VillageState,
    goalOrientedRobot: goalOrientedRobot
};
