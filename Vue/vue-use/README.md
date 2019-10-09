Vue
VueRooter  路由
Vuex 数据流

ElementUI PC

插件

vue瘦身 MVVM
其他的都是他的周边生态
插件机制往里加 Vue.use(plugin)
elementui 有两种引入组件的方式 <ElButton></ElButton> Vue.component(component.name,component)
component.forEach( )
Vue.use(plugin) 执行install
{
    install:function(){
        Vue.component(component.name,component)
        Vue.prototype.$message = Message
    }
}
