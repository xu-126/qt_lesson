import Vue from 'vue'
import Vuex, { mapActions, mapGetters } from 'vuex'

// 借 mapActions mapGetters this.$store this.$router
Vue.use(Vuex);

const state = {
    count: 0  //状态树里的状态
}
const mutations = {//修改状态

}
const actions={

}
const getters={
    
}
export default new Vuex.Store({
    state,mutations,actions,getters
})
