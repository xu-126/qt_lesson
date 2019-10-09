import shop from '../../api/shop'
const state = {
    all:[
        {
            id:1,
            title:'iphone11',
            price:4999
        }
    ]
}
const getters = {}
const actions = {
    //所有api请求都在actions  改变状态在mutations里
    // commit mutations => state
    getAllProducts({ commit }){ 
        shop.getProducts((products)=>{
            console.log('前端到api,再通过callback回来了',products)
            commit('setProducts',products)
        })
    }
}
const mutations = {
    setProducts(state,products){
        state.all = products
    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}