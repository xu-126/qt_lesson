<template>
    <div class="note-list-wrapper">
        <div class="note-container note-list">
            <div class="note-wrapper">
                <div class="note-column" v-for="(item,index) in notes" :key="index">
                    <div class="note" v-for="(item0,index) in item.note" :key="index">
                        <div class="note-info">
                            <div class="note-image">
                                <div class="lazyload-block">
                                    <div class="lazyload-container loaded" >
                                        <img :src="item0.img" 
                                        class="lazyload lazyload-image loaded" style="width: 186px; height: 293.04px;">
                                    </div>
                                </div>
                                <i class="normal"></i>
                            </div>
                            <h3 class="info">{{item0.info}}</h3>
                        </div>
                        <div class="note-append">
                            <div class="user">
                                <div class="user-image-wrapper">
                                    <img :src="item0.userImg" 
                                    class="lazyload lazyload-image loaded" style="width: 28px; height: 28px;">
                                    <i class="official" style=""></i>
                                </div>
                                <span class="name">{{item0.name}}</span>
                            </div>
                            <div class="like">
                                <i class="heart"></i>
                                <span class="likes">{{item0.likes}}</span>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="note">
                        <div class="note-info">
                            <div class="note-image">
                                <div class="lazyload-block">
                                    <div class="lazyload-container loaded" >
                                        <img src="https://ci.xiaohongshu.com/14746747-a58e-51ec-a351-38043c87bbdb?imageView2/2/w/1080/format/jpg" 
                                        class="lazyload lazyload-image loaded" style="width: 186px; height: 293.219px;">
                                    </div>
                                </div>
                                <i class="normal"></i>
                            </div>
                            <h3 class="info">爱爱i啊</h3>
                        </div>
                        <div class="note-append">
                            <div class="user">
                                <div class="user-image-wrapper">
                                    <img src="https://ci.xiaohongshu.com/fae1c833-589e-5318-a436-cb6b947ebe74?imageView2/2/w/1080/format/jpg" 
                                    class="lazyload lazyload-image loaded" style="width: 186px; height: 123.816px;">
                                    <i class="official" style=""></i>
                                </div>
                                <span class="name">Romy.熊</span>
                            </div>
                            <div class="like">
                                <i class="heart"></i>
                                <span class="likes">140</span>
                            </div>
                        </div>
                    </div>
                    <div class="note">
                        <div class="note-info">
                            <div class="note-image">
                                <div class="lazyload-block">
                                    <div class="lazyload-container loaded" >
                                        <img src="https://ci.xiaohongshu.com/c31583d8-9094-552b-b57b-0afd0e79a645?imageView2/2/w/1080/format/jpg" 
                                        class="lazyload lazyload-image loaded" style="width: 186px; height: 293.04px;">
                                    </div>
                                </div>
                                <i class="normal"></i>
                            </div>
                            <h3 class="info">爱爱i啊</h3>
                        </div>
                        <div class="note-append">
                            <div class="user">
                                <div class="user-image-wrapper">
                                    <img src="https://ci.xiaohongshu.com/fae1c833-589e-5318-a436-cb6b947ebe74?imageView2/2/w/1080/format/jpg" 
                                    class="lazyload lazyload-image loaded" style="width: 186px; height: 123.816px;">
                                    <i class="official" style=""></i>
                                </div>
                                <span class="name">Romy</span>
                            </div>
                            <div class="like">
                                <i class="heart"></i>
                                <span class="likes">140</span>
                            </div>
                        </div>
                    </div> -->
                </div>
                <!-- <div class="note-column">
                    <div class="note">
                        <div class="note-info">
                            <div class="note-image">
                                <div class="lazyload-block">
                                    <div class="lazyload-container loaded" >
                                        <img src="https://ci.xiaohongshu.com/3d512b2c-7a46-5cc3-80bf-b56126ea8511?imageView2/2/w/1080/format/jpg" 
                                        class="lazyload lazyload-image loaded" style="width: 186px; height: 293.089px;">
                                    </div>
                                </div>
                                <i class="normal"></i>
                            </div>
                            <h3 class="info">爱爱i啊</h3>
                        </div>
                        <div class="note-append">
                            <div class="user">
                                <div class="user-image-wrapper">
                                    <img src="" alt="">
                                    <i class="official" style=""></i>
                                </div>
                                <span class="name">Romy.熊</span>
                            </div>
                            <div class="like">
                                <i class="heart"></i>
                                <span class="likes">140</span>
                            </div>
                        </div>
                    </div>
                    <div class="note">
                        <div class="note-info">
                            <div class="note-image">
                                <div class="lazyload-block">
                                    <div class="lazyload-container loaded" >
                                        <img src="https://ci.xiaohongshu.com/b9d15cd0-8b4e-5754-bca9-62bf28a8970a?imageView2/2/w/1080/format/jpg" 
                                    class="lazyload lazyload-image loaded" style="width: 186px; height: 330.293px;">
                                    </div>
                                </div>
                                <i class="normal"></i>
                            </div>
                            <h3 class="info">爱爱i啊</h3>
                        </div>
                        <div class="note-append">
                            <div class="user">
                                <div class="user-image-wrapper">
                                    <img data-v-4815da0d="" src="https://img.xiaohongshu.com/avatar/5b9b31664c7eb8000166d827.jpg@80w_80h_90q_1e_1c_1x.jpg"
                                     class="user-image">
                                    <i class="official" style=""></i>
                                </div>
                                <span class="name">Romy.熊</span>
                            </div>
                            <div class="like">
                                <i class="heart"></i>
                                <span class="likes">140</span>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
// import scroll from '@/components/scroll/scroll.vue'
export default {
    props: {
        notes:{
            type:Array
        }
    },
    // created(){
    //     console.log(item.item0)
    // },
  data(){
      return{
          
      }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/css/function'
    .note-list-wrapper
        margin-top 14vh
        margin-left px2rem(10px)
        margin-right px2rem(10px)
        .note-container
            margin px2rem(20px) 0 px2rem(100px)
            .note-wrapper
                display flex
                // border 1px solid red
                // flex-direction row
                .note-column
                    margin 0 px2rem(10px) 0 0
                    width 49.5%
                    // border 1px solid red
                    &:last-child
                        margin-right 0px
                .note
                    margin-bottom px2rem(20px)
                    // border 1px solid green
                    background-color #fff
                    box-shadow 0 1px 2px rgba(0,0,0,.1)
                    border-radius 8px
                    overflow hidden
                    cursor pointer
                    display flex
                    position relative
                    flex-direction column
                    .note-info
                        width 100%
                        display flex
                        flex-direction column
                        .note-image
                            position relative
                            .lazyload-block
                                overflow hidden
                                .lazyload-container
                                    position relative
                        .info
                            padding 0
                            margin 10px 15px  
                            color #000
                            font-size 16px
                            font-weight 400  
                            line-height 24px    
                    .note-append
                        // border 2px solid orange
                        padding 0 15px 10px
                        width 100%
                        display flex
                        flex-direction row
                        justify-content space-between
                        align-items center 
                        .user
                            display flex
                            flex-direction row
                            align-items center
                            .user-image-wrapper
                                width 28px
                                height 28px
                                border-radius 50%
                                position relative
                                overflow hidden   
                            .name
                                width 50px
                                word-spacing nowrap 
                                text-overflow ellipsis
                                overflow hidden 
                                margin-left 10px
                                color #555
                                font-size 12px       

                    

    
</style>