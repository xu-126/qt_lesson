<template>
  <div id="id">
      <img src="./assets/2.jpg" alt="">
      <router-link to="/login">登录</router-link>
      <router-link to="/">home</router-link>
      <router-view></router-view>
  </div>
</template>

<script>

// createElement('img',{
//   attrs: {
//     src: require("./assets/2.jpg")
//   }
// })
export default {
    name: 'app'
}
</script>

<style lang="less">
body{
  height:500px;
  background:red;
}
</style>
