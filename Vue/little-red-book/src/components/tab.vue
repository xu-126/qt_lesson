<template>
  <div class="container">
    <div class="icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test"></use>
        </svg>
    </div>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/concern">
        <span class="tab-link">关注</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/find">
        <span class="tab-link">发现</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/nearby">
        <span class="tab-link">南昌</span>
      </router-link>
    </div>
    <router-link to="/search">
      <div class="search">
        <div class="search-icon">
          <i class="iconfont icon-sousuo1" style="width:20px;height:20px;"></i>
          <span>lalalala</span>       
        </div>
      </div>   
    </router-link>
    
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
  position relative
  z-index 2
  width 100%
  height 14vh
  position fixed
  left 0
  top 0
  background-color #fff
  .icon
    display inline
    position absolute
    left px2rem(20px)
    top px2rem(20px)
  .tab
    margin px2rem(15px) auto
    display flex
    width 50%
    height px2rem(100px)
    line-height px2rem(100px)
    font-size 16px
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
    background-color #8080807a
    border-radius 50px
    .search-icon
      margin auto
      text-align center
      height px2rem(100px)
      line-height px2rem(100px)
</style>
