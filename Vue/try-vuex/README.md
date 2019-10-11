- vuex 数据流
组件  +  数据
1. 共享一个状态
- this.$store
Vue.use(Vuex) Vue.$store
- this.$store.state
new Vue({
    store
})
store = new Vuex.Store({
    state,
    ...
})
myVuex Vue.use(myVuex)
new myVuex.Store
options 四大家族

- es6模块化机制
- class get 方法
 Store是一个类 四大家族是他的属性 
 this.$store 对vue.prototype扩展后 所有的组件都可以调用
 Vue 钩子函数 beforeCreated 除了他该做的再做下vuex的初始化
 Vue.mixin({
     beforeCreated:vuexInot
 })
让唯一的store对象 state是属性
通过源码所有组件都可以访问$store 是因为它已经为vue 单例加入了这个属性 每个组件里的this -> 本组件 prototype -> vue单例
this.$store.getters.xxxx
Object.defineProperty(this.$store.getters,xxx,{
    get : (){
        数据劫持
        return store.options.getters[xxx]
        return getterFn(store.state)
    }
})

# try-vuex

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
