<template>
  <div id="child1">
    {{msg}}{{msg2}}
    <button @click="fn">按钮</button>
    <!-- {{test.a}}{{test.b}} -->
    {{a}}
    {{b}}
    <p>----------------------</p>
    <button  @click="add">+</button> 
    <!-- {{oCount}} -->
    {{count}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      oCount:0
    }
  },
  props:['msg','msg2','fn','a','b','count','aC'],
  // created(){
  //    this.oCount = this.count
  // },
  methods:{
    // add(){
    //   this.oCount++
    // }
    add() {
      this.$emit('addCount')
    }
  }
}
</script>

<style>

</style>
