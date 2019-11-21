<template>
    <div class="tableBar">
        <div class="tab">
            <router-link tag="div" class="tab-item" to="/shouye">
                <span class="tab-link">首页</span>
            </router-link>
            <router-link tag="div" class="tab-item" to="/11.11">
                <span class="tab-link">商城</span>
            </router-link>
            <div class="icon tab-item">
                <svg class="center-icon " aria-hidden="true">
                    <use xlink:href="#icon-tianjia-copy"></use>
                </svg>
            </div>
            <router-link tag="div" class="tab-item" to="/xiaoxi">
                <span class="tab-link">消息</span>
            </router-link>
            <router-link tag="div" class="tab-item" to="/me/天很蓝/1264930795">
                <span class="tab-link">我</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
@import '../assets/css/function'
.tableBar
    position fixed
    bottom 0
    left 0
    background-color #fff
    z-index 2
    // border 1px solid black
    width 100%
    .tab
        display flex
        // position absolute
        height px2rem(100px)
        line-height px2rem(100px)
        font-size 20px
        color #ffffff 
        width 100%
        bottom px2rem(10px)
        background-color #green
        .tab-item
            flex 1
            text-align center
            color gray
        .center-icon
            position absolute
            left 50%
            transform translateX(-50%)
            width 4em
            height 2em
            text-align center
</style>