import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import find from '@/components/pages/find'
import search from '@/components/pages/search'
import index from '@/components/pages/index'
import concern from '@/components/pages/concern'
import nearby from '@/components/pages/nearby'
// import me from '@/components/pages/me'
import Login from '@/components/Login'
// import Register from '@/components/Register'
// import xiaoxi from '@/components/pages/xiaoxi'
import demo from '@/components/demo'
import tabD from '@/components/tabD'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/tabD',
      name: 'tabD',
      component: tabD
    },
    {
      path: '/find',
      name: 'index',
      component: index
    },
    // {
    //   path: '/shouye',
    //   name: 'index',
    //   component: index
    // },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/concern',
      name: 'concern',
      component: concern
    },
    {
      path: '/nearby',
      name: 'nearby',
      component: nearby
    },
    // {
    //   path: '/me/:nickname/:username',
    //   name: 'me',
    //   component: me
    // },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    // {
    //   path: '/Register',
    //   name: 'Register',
    //   component: Register,
    //   meta: {
    //     title: '注册'
    //   }
    // },
    // {
    //   path: '/xiaoxi',
    //   name: 'xiaoxi',
    //   component: xiaoxi,
    //   meta: {
    //     title: '消息'
    //   }
    // },
    {
      path: '/demo',
      name: 'demo',
      component: demo,
      meta: {
        title: 'demo'
      }
    }
  ]
})
