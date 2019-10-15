<template>
  <div>
      <button @click="handleDispatch">派发事件</button>
  </div>
</template>

<script>
export default {
    methods:{
        handleDispatch(){
            this.$dispatch('test','hello.vue.js')
        }
    }
}
</script>

<style>

</style>