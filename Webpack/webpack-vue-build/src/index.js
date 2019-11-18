import vue from 'vue'
import {add,sub} from './util.js'
import App from './App'
console.log(add(1,2))
// rm -rf
//mian.js 7.42  10.42

new vue({
    render: h => h(App),
    components: { App }
}).$mount('#app')