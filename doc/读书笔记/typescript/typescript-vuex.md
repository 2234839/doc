# typescript 与 vuex，提供代码提示

- pubdate:2019-11-10 19:50:04
- tags:typescript,vuex

vuex commit 是没有代码提示的，当初接触到 typescript 之后就一直想实现这个提示，现在终于做到了

---

下面是实现方式

```typescript
import Vue from "vue";
import Vuex from "vuex";
import { API } from "@/services/mods";
import { debounce } from "@/util/util_fun";
import { config } from "@/config";
Vue.use(Vuex);
/** __开头的属性是不会保存到store 的 */
const _state = {
  user_info: {} as typeof API.报表开发移动端.postCustomerInfoValidateLogin.init["data"],
  wxUsers: {} as un_return_promise<typeof API.报表开发移动端.postCustomerInfoFindCustomerInfoList.request>["data"],
  /** 日报的缓存 */
  daily_cache: {},
  /** [这里进去的时候会查询这个缓存](src\pages\mine\view_subordinate_schedule\_view_subordinate_schedule_list.ts) */
  查看下级选人缓存: [] as string[],
  /** 当前选择的日程展示方式
   *
   * **副作用** 会设置tabBar index为1的按钮的text为当前值
   */
  scheduleType: "日程" as "日程" | "周程" | "月程",
  /** 当前选中的tab地址 */
  __tabPath: "",
  __1: "测试存储",
};

const cache_state = uni.getStorageSync("state");
Object.assign(_state, cache_state);
type mutations_key = keyof typeof mutations;

/**
 * **注意** 这里的 mutations 里面的函数入参和vuex的要求是颠倒的,
 * 原因是为了 commit.set_packet_token 这样的方法可以直接跳转过来，
 * 在store_options中我是包了一层函数将参数调转位置交给这里面的函数
 *
 * **最后一个 state 参数不应该传入**
 * */
const mutations = {
  set_user_info(user_info: typeof _state.user_info, state = _state) {
    state.user_info = user_info;
  },
  set_packet_token(packet_token: string, state = _state) {
    state.user_info.packet_token = packet_token;
  },
  set_wxUsersVoList(wxUsers: typeof _state.wxUsers, state = _state) {
    state.wxUsers = wxUsers;
  },
  set_daily_cache(daily_cache: typeof _state.daily_cache, state = _state) {
    state.daily_cache = daily_cache;
  },
  /** **jsdoc注释测试** */
  set_查看下级选人缓存(查看下级选人缓存: typeof _state.查看下级选人缓存, state = _state) {
    state.查看下级选人缓存 = 查看下级选人缓存;
  },
  set_tabPath(tabPath: typeof _state.__tabPath, state = _state) {
    state.__tabPath = tabPath;
  },

  set_scheduleType(scheduleType: typeof _state.scheduleType, state = _state) {
    state.scheduleType = scheduleType;
  },
};
const store_options = {
  state: {} as typeof _state,
  mutations: (() => {
    var obj = {} as any;
    for (const key in mutations) {
      const f = mutations[key as keyof typeof mutations];
      /** 倒置入参，使参数顺序实际为正常 */
      obj[key] = function (state: any, ...payload: any[]) {
        //@ts-ignore
        return f(...payload, state);
      };
    }
    return obj;
  })(),
};

export const store = new Vuex.Store(store_options);

store.watch(
  (state) => {
    return state.scheduleType;
  },
  (scheduleType) => {
    uni.setTabBarItem({
      index: 1,
      text: scheduleType,
    });
    $emit_event("日程切换", scheduleType);
  },
);
/** 在这里使用 replaceState 而非直接在 store_options 赋值的原因是为了store.watch第一次加载的时候也可以生效 */
store.replaceState(_state);
/** vuex 的commit */
export const commit = {} as typeof mutations;

for (const key in store_options.mutations) {
  commit[key as mutations_key] = (data: any) => {
    return store.commit(key, data);
  };
}

/** 存储 store */
store.subscribe(
  debounce((mutation: any, state: any) => {
    if (config.isDev) {
      console.log(state);
    }
    const data = JSON.parse(JSON.stringify(state));
    for (const key in data) {
      /** 剔除 __ 开头的属性，这种属性不用存储 */
      if (data.hasOwnProperty(key) && key.startsWith("__")) {
        delete data[key];
      }
    }
    uni.setStorage({ key: "state", data: data });
  }, 200),
);
```

通过类型系统，commit 对象上的方法可以直接使用，代码提示一应俱全，actions 可以采用同样的思路


{: id="20201104153359-1xck2an" type="doc"}
