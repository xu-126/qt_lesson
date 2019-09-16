<template>
    <div>
        <div class="first">
            <div class="title">
                <div class="name">{{seller.name}}</div>
                <span class="star">
                    <img src="./star.png" alt="" >
                    <img src="./star.png" alt="">
                    <img src="./star.png" alt="">
                    <img src="./star.png" alt="">
                    <img src="./star.png" alt="">
                </span>
                <span class="num">({{seller.ratingCount}})</span>
                <span class="count">月售{{seller.sellCount}}单</span>
            </div>
    </div>
    <div class="second">
        <div class="item item1">
            起送价
            <div >
                <span>{{seller.minPrice}}</span>
                <span>元</span>
            </div>
        </div>
        <div class="item item2">
            商家配送
            <div >
                <span>{{seller.deliveryPrice}}</span>
                <span>元</span>
            </div>
        </div>
        <div class="item item3">
            平均配送时间
            <div >
                <span>{{seller.deliveryTime}}</span>
                <span>分钟</span>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'Seller',
    props: {
        seller: {
        type: Object
    }
  },
    data(){
        return {
            // ratings:[]
        }
    },
    // created () {
    // this.$http.get('http://localhost:8080/static/seller.json').then(res => {
    //   if (res.data.errno === 0) {
    //     this.ratings = res.data.data
    //     console.log(res)
    //   }
    // })
//   },
        
    
}
</script>
<style lang="stylus" scoped>
    .first
        position relative
        width 340px
        left 20px
        top 20px
        padding-bottom 40px
        border-bottom 1px solid rgba(7,17,27,0.1)
        .name
            padding-bottom 5px
        .title
            font-size 14px
            span
                font-size 12px
                color gray
                position absolute
                top 20px
                img 
                    width 17px
                    height 17px
            .num
                top 25px
                left 105px
            .count
                top 25px
                left 135px
    .second
        position absolute
        width 100%
        top 270px
        border 1px solid red
        display flex
        .item
            flex 1
            text-align center
            border-right 1px solid rgba(7,17,27,0.2)
            font-size 12px
            color gray 
            span
                font-size 20px
</style>