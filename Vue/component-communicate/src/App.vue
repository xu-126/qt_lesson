<template>
  <div id="app"> 
    <child1 :msg='msg' :msg2='msg2' :fn='appFn' v-bind="test" :count="count" @addCount="countAdd" :add='countAdd'></child1>
    <!-- 用v-bind 绑定可以拿到数据里的子数据 -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import child1 from '@/components/common/child1'
export default {
  name: 'App',
  components:{
    child1
  },
  data() {
    return {
      msg:'给child的礼物',
      msg2:'再次给礼物',
      test:{
        a:1,b:2
      },
      count:1
    }
  },
  methods:{
    appFn() {
      console.log('我是App.vue里面的方法')
    },
    countAdd() {
      this.count++
    }
  }
}
</script>

<style>

</style>
