<template>
  <div id="app">
    <v-Header :seller="seller"></v-Header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="seller">商家</router-link>
      </div>
    </div>
    <router-view :seller='seller' :ratings='ratings'/>
  </div>
</template>

<script>
import Header from '@/components/header/Header'

export default {
  name: 'App',
  data () {
    return {
      seller: {},
      ratings:{}
    }
  },
  components: {
    'v-Header': Header
  },
  created () {
    this.$http.get('http://localhost:8080/static/seller.json').then(res => {
      if (res.data.errno === 0) {
        console.log(res)
        this.seller = Object.assign({}, this.seller, res.data.data)
      }
    })
    this.$http.get('http://localhost:8080/static/ratings.json').then(res => {
      if (res.data.errno === 0) {
        console.log(res)
         this.ratings = Object.assign({}, this.ratings, res.data.data)
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
@import './common/stylus/mixin.styl';
.tab
  display flex
  border-bottom 1px solid rgba(7, 17, 27, 0.1)
  border-1px(rgba(7, 17, 27, 0.1))
  &-item
    flex 1
    text-align center
    line-height 40px
    & > a
      display block
      font-size 14px
      text-decoration none
      color rgb(77, 85, 93)
      &.router-link-active
        color rgb(240, 20, 20)
</style>
