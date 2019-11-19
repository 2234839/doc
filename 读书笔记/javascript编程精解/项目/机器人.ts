/** 描述道路的数组 */
const roads = [
    "爱丽丝家->鲍勃家", "爱丽丝家->小屋",
    "爱丽丝家->邮局", "鲍勃家->市政厅",
    "达莉亚家->厄尼家", "达莉亚家->市政厅",
    "厄尼家->葛蕾特家", "葛蕾特家->农场",
    "葛蕾特家->商店", "市场->农场",
    "市场->邮局", "市场->商店",
    "市场->市政厅", "商店->市政厅"
];

/** 将描述道路的数组转化为图数据结构 */
function buildGraph(edges: string[]) {
    const graph = Object.create(null)
    /** 添加一条边线 */
    function addEdge(from: string, to: string) {
        if (graph[from] === undefined) {
            graph[from] = [to]
        } else {
            graph[from].push(to)
        }
    }
    for (const [from, to] of edges.map(r => r.split("->"))) {
        addEdge(from, to)
        addEdge(to, from)
    }
    return graph
}

/** 将数组信息转化为对象图 */
const roadGraph = buildGraph(roads)

console.log(roadGraph);

/** 包裹的结构 */
interface parcel {
    /** 当前位置 */ place: string,
    /** 发出地址 */ address: string
}

/** 村庄状态 */
class VillageState {
    constructor(public place: string, public parcels: parcel[]) { }
    move(/** 目的地 */ destination: string) {
        if (!roadGraph[this.place].includes(destination)) {
            return this
        } else {
            const parcels = this.parcels.map(p => { /** 处理移动，包裹到了新的地方 */
                return { place: destination, address: p.address }
            }).filter(p => p.place !== p.address) /** 到地方的包裹去掉当作放到了 */
            return new VillageState(destination, parcels)
        }
    }
    /** 随机生成一个状态 */
    public static random(parcelCount = 5) {
        let parcels: parcel[] = []
        for (let i = 0; i < parcelCount; i++) {
            const address = randomPick(Object.keys(roadGraph))
            let place
            do {
                place = randomPick(Object.keys(roadGraph))
            } while (place === address);
            parcels.push({ place, address })
        }
        return new VillageState('邮局', parcels)
    }
}

let first = new VillageState(
    "邮局",
    [{ place: "邮局", address: "爱丽丝家" }]
)

let next = first.move("爱丽丝家")

/** 运行机器人 */
function runRobot(
    state: VillageState,
    robot: (state: VillageState, memory?: any) => { direction: string, memory?: any }
    , memory?: any
) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length === 0) {
            console.log(`跑了${turn}次`);
            return turn
        }
        let action = robot(state, memory)
        state = state.move(action.direction)
        memory = action.memory
        // console.log(`从${state.place}  移动到  ${action.direction}`);
    }
}

/** 随机选择下一个地址 */
function randomPick(array: string[]) {
    let choice = Math.floor(Math.random() * array.length)
    return array[choice]
}

/** 随机走的机器人 */
function randomRobot(state: VillageState) {
    return { direction: randomPick(roadGraph[state.place]) }
}
/** 巡路机器人 */
function routeRobot(state: VillageState, memory: string[]) {
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
            "市场", "邮局"]
    }
    return { direction: memory[0], memory: memory.slice(1) }
}

/**  找到最短的路线，具体算法是从当前点向所有方向推进 当找到目的地的时候返回这条路线 */
function findRoute(graph: any, from: string, to: string): string[] {
    const work: { at: string, route: string[] }[] = [{ at: from, route: [] }]
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i]
        for (const place of graph[at]) {
            if (place === to) return route.concat(place)
            if (!work.some(w => w.at === place)) {
                work.push({ at: place, route: route.concat(place) })
            }
        }
    }
    return []
}

function goalOrientedRobot({ place, parcels }: { place: string, parcels: parcel[] }, route: string[]) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}
runRobot(VillageState.random(), routeRobot, [])

export default {
    runRobot,
    VillageState,
    goalOrientedRobot
}