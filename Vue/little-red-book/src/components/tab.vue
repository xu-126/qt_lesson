<template>
  <div class="container">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/concern">
        <span class="tab-link">关注</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/">
        <span class="tab-link">发现</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/nearby">
        <span class="tab-link">南昌</span>
      </router-link>
    </div>
    <div class="search"></div>
  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style scoped lang="stylus">
@import '../assets/css/function'
.container
  z-index 2
  width 100%
  height 14vh
  position fixed
  left 0
  top 0
  background-color #fff
  .tab
    border 1px solid red
    margin auto
    display flex
    width 50%
    height px2rem(100px)
    line-height px2rem(100px)
    font-size 14px
    .tab-item
      flex 1
      color gray 
      text-align center
      .tab-link
        padding-bottom 5px
      &.router-link-active
        .tab-link
          color #ea2448
          border-bottom 2px solid #ea2448
  .search
    margin px2rem(18px) auto
    width 90%
    height px2rem(100px)
    background-color gray
    border-radius 50px
</style>
