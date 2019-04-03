var StorageEvent={}
(function StorageEventInit($) {
    /*------------[Storage]------------*/
    let util_onStorage_map = new Map() //存储监听的事件和函数
    /**
     * 监听storage事件
     * @param {String} key	 	要监听的storage key
     * @param {Function} fun	事件处理函数 (e.newValue,e)
     */
    function onStorage(key, fun) {
        util_onStorage_map.set(key, fun)
    }
    /**
     * 触发storage事件
     */
    function triggerStorage(key, value = Date.now()) {
        if (typeof {} === "object") {
            value.__time__ = Date.now()//保证每个对象序列化后都不一致
            value = JSON.stringify(value)
        }
        let event = {
            key,
            oldValue: localStorage.getItem(key),
            newValue: value,
        }
        localStorage.setItem(key, value)
        if (util_onStorage_map.has(event.key)) { //此页面也有监听storage的函数，因为下面的监听捕获不到故在此处罚
            event.local = true //这个事件是自己这个页面触发的
            handle(event)
        }
    }
    window.addEventListener("storage", handle)

    function handle(e) {
        var newValue = e.newValue
        try {
            newValue = JSON.parse(e.newValue)
        } catch (e) {
        }
        if (util_onStorage_map.has(e.key)) //将新值传给监听该key的函数
            util_onStorage_map.get(e.key)(newValue, e) //触发监听这个key的函数
    }
    /*############[Storage]############*/
})(StorageEvent)