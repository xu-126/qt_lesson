<template>
    <div>
        <div class="container">
            <div class="container-up">
                <div class="left">
                    <div class="box">
                        <div class="s-grade">{{seller.score}}</div>
                        <div class="text">综合评分</div>
                        <div class="rating">高于周边商家{{seller.rankRate}}%</div>
                    </div>
                </div>
                <div class="right">
                    <div class="box">
                        <div class="server">
                            <span class="item-text">服务态度</span>
                            <div class="rating" id="rating">
                                <img src="./star.png" alt="">   
                                <img src="./star.png" alt="">
                                <img src="./star.png" alt="">
                                <img src="./star.png" alt=""> 
                                <img src="./star2.png" alt="">                           
                                <span class="rating-score">{{seller.serviceScore}}</span>
                            </div>
                        </div>
                        <div class="g-grade">
                            <span class="item-text">商品评分</span>
                            <div class="rating" id="rating">
                                <img src="./star.png" alt="">   
                                <img src="./star.png" alt="">
                                <img src="./star.png" alt="">
                                <img src="./star.png" alt=""> 
                                <img src="./star2.png" alt="">   
                                <span class="rating-score">{{seller.foodScore}}</span>
                            </div>
                        </div>
                        <div class="ontime">
                            <span class="item-text">送达时间</span>
                            <span class="time">{{seller.deliveryTime}}分钟</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-down">
                <div class="btn-box">
                    <!-- <div class="btn " @:click="change">全部</div>
                    <div class="btn " :class="btn11">满意</div>
                    <div class="btn " :class="btn33">不满意222</div> -->
                    <ul>    
                        <li class="btn" :class="activeClass == index ? 'btn11':''" 
	                    v-for="(item,index) in itemList" 
	                    :key="index" 
	                    @click="getItem(index)">{{item}}
                        <span>24</span>
                        </li>
                    </ul>
                </div>
                <div class="check-right">
                    <img src="./right.png" alt="">                   
                    <span>只看有内容的评价</span>
                </div>
            </div>
            <div class="line"></div>
            <div class="hidden">
                <ul>
                    <!-- {{ratings}} -->
                    <li v-for="(item,index) in ratings" :key="index" class="hidden-item">
                        
                        {{item.username}}
                        <!-- <img src="./star.png" alt="">
                        <div class="name">333</div>
                        <div class="rate">33333</div>
                        <div class="time"></div> -->
                    </li>
                    <!-- <li class="hidden-item">
                        <img src="./star.png" alt="">
                        <div class="name">333</div>
                        <div class="rate">33333</div>
                        <div class="time"></div>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Ratings',
    props: {
        ratings: {
        type: Object
    },
    seller: {
        type: Object
    }
  },
  

    data() {
    return {
      activeClass: 0, 	// 0为默认选择第一个，-1为不选择
      itemList:["全部","满意","不满意"]
    };
    
    },
    created () {
    // this.$http.get('http://localhost:8080/static/ratings.json').then(res => {
    //   if (res.data.errno === 0) {
    //     this.ratings = res.data.data
    //     // console.log(res)
    //     console.log(this.ratings)
    //   }
    // })
  },
    methods:{
        getItem(index){
            console.log(index)
            this.activeClass = index
        },
         star (e){
                console.log(e)
                    let num = Math.floor(e);
                    let white = Math.floor(5-e);
                    for (let i = 0; i<white; i++){
                        $('#rating').prepend('<img class="img" src="./images/star2.png"></img>')
                    }
                    if(e>num){
                        $('#rating').prepend('<img class="img" src="./images/star-h.png"></img>')
                    }
                    for (let j = 0; j<num; j++){
                        $('#rating').prepend('<img class="img" src="./images/star.png"></img>')
                    }
                }
    }
}
</script>
<style lang="stylus" scoped>
    .container
        position relative
        height 120px
        .container-up
            height 120px
            .left
                position relative
                width 34%
                height 100%
                background-color #fff
                .box
                    width 100%
                    position absolute
                    top 50%
                    left 50%
                    transform translate(-50%,-50%)
                    text-align center
                    border-right 1px solid gray
                    margin-top -5px
                    padding-top 8px
                    padding-bottom  12px
                    .s-grade
                        color orange
                        font-size 24px
                        line-height 24px
                    .text
                        font-size 14px
                        font-weight bold
                        line-height 30px
                    .rating
                        font-size 12px
                        color gray 
            .right
                .box
                    position absolute
                    top 15px
                    left 150px
                    .item-text
                        font-size 14px
                        font-weight bold
                        line-height 26px
                    .time
                        font-size 14px
                        color gray
                    .rating
                        display inline-block
                        .rating-score
                            color orange 
                            font-size 14px
            &::after
                content ''
                display block
                height  20px
                width  100% 
                border-top 1px solid gray
                border-bottom 1px solid gray
                background-color #eee                
        .container-down
            position relative
            .btn-box
                position absolute
                top 40px
                left 20px
                padding-bottom 20px
                width 335px
                border-bottom 1px solid rgba(7, 17, 27, 0.1)
                ul 
                    .btn
                        color black
                        font-size 14px
                        display inline-block
                        background-color lightblue
                        height 30px
                        line-height 30px
                        padding 0 10px 0 10px
                        margin-right 5px
                        &.btn11
                            background-color blue
                            color white
                        &.btn33
                            background-color gray
                    li 
                        span 
                            font-size 12px
                    .btn3
                        background-color lightgray
            .check-right   
                position absolute
                left 20px
                top 100px
                display inline-block
                img
                    text-align center
                span 
                    font-size 13px
                    color gray
                    display block
                    width 120px
                    position absolute
                    top 5px
                    left 30px
                    letter-spacing 1.5px
        .line
            position absolute
            top 260px
            display block
            height 1px
            width 100%
            background-color rgba(7,17,27,0.2)
        .hidden
            position absolute
            top 280px
            left 20px
            .hidden-item                
                border  1px solid red
                border-bottom 1px solid green
                padding-bottom 20px
                margin-bottom 20px
               

                        



</style>