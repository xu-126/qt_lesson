<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
 
}
</script>

<style lang="stylus">

// .icon
//   font-family "icon" !important
//   font-size 18px
//   font-style normal
//   color #ffffff
*
  box-sizing border-box
  margin 0 
  padding 0
.icon 
  width 2em
  height 2em
  vertical-align -0.15em
  fill currentColor
//   overflow hidden
html,body
  box-sizing border-box
  position relative
  line-height 1
  user-select none
  -webkit-tap-highlight-color transparent
  font-size 14px
  font-family -apple-system,SF UI Text,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,Helvetica Neue,Helvetica,Arial,sans-serif
  color #333
  // background rgba(8, 5, 58, 0.9)
a
  text-decoration none
</style>
