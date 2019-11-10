# typescript 与 vuex，提供代码提示

- pubdate:2019-11-10 19:50:04
- tags:typescript,vuex

vuex commit 是没有代码提示的，当初接触到typescript之后就一直想实现这个提示，现在终于做到了

---------

下面是实现方式

````typescript
import Vue, { ComponentOptions } from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const _state = {
    userInfo: { packet_token: "" }
}

const store_options = {
    state: _state,
    mutations: {
        set_userinfo(state: typeof _state, userinfo: typeof _state.userInfo) {
            state.userInfo = userinfo
        },
    },
    actions: {}
}
export const store = new Vuex.Store(store_options)

type mutations_key = keyof typeof store_options.mutations
type mutations_obj = {
    [key in mutations_key]: (a: Parameters<(typeof store_options.mutations)[key]>[1]) => ReturnType<(typeof store_options.mutations)[key]>
}
/** 提交数据到vuex */
export const commit = new Proxy({}, {
    get: function (target, name) {
        if (typeof name !== "string") {
            throw "属性名好像不太对"
        }
        return (data: any) => {
            return store.commit(name, data)
        }
    },
    set(obj, prop, value) {
        throw `不可以设置 ${obj} 的 ${String(prop)} 为 ${value}`;
    }
}) as mutations_obj;
````

通过神奇的类型系统，commit对象上的方法可以直接使用，代码提示一应俱全，actions可以采用同样的思路

但还是存在着缺点不可以直接通过commit.set_token跳到真正的代码所在，这个目前还不知道怎么解决。希望有大神指导一下，不胜感激🌹
