<template>
  <div class="star-login">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="">
      <h2 class="lifestyle">标 记 我 的 生 活</h2>
    </div>
    <div class="login-wraper">
      <!-- <div class="avatar" :style="`background-image: url(${avatar})`"></div> -->
      <div class="input-group">
        <label for="username">账号</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="input-group input-group-panel">
        <label for="userpwd">密码</label>
        <input type="password" id="userpwd" v-model="userpwd" />
      </div>
      <p class="forgot-pwd">忘记密码</p>
      <div class="sign" @click="login">登录</div>
    </div>
    <p class="register" @click="register">新用户？点击这里注册</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Login",
  data() {
    return {
      username: "",
      userpwd: ""
      // avatar: require('../../assets/img/raw_1512446140.jpeg')
    };
  },
  methods: {
    login() {
      if (this.username.trim() == "" || this.userpwd.trim() == "") {
        this.$toast("账号或密码不能为空");
        return;
      }
      this.$http({
        url: "http://localhost:3000/users/userLogin",
        method: "post",
        data: {
          username: this.username.trim(),
          userpwd: this.userpwd.trim()
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == "800000") {
            sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
            this.$router.push({ path: "/" });
          } else {
            this.$toast(res.data.mess);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    register() {
      this.$router.push({ path: "/Register" });
    }
  },
  mounted(){
    this.$on('send', (username)=> {
      this.username = (username)
    })
  },
  components: {}
};
</script>


<style lang="stylus" scoped>
@keyframes move 
        0%
            background: url('../assets/images/1.jpg') -200px 0px
        
        100%
            background: url('../assets/images/1.jpg') -200px -10024px

input 
  border 0
  outline none
h1 
    margin-top 1.12rem
    height 0.693333rem
    line-height 0.693333rem
    color rgba(16, 16, 16, 1)
    font-size 0.48rem
    text-align center
    font-family Arial
.star-login
  background url('../assets/images/1.jpg') no-repeat
  background-color #131111
  opacity 0.8
  width 100%
  height 100%
  position relative
  padding-top 7rem
  animation move 80s  ease-in infinite 
  .logo
    width 55%
    margin auto
    img
      margin auto
      display block
      width 11rem
      height 3.5rem
    .lifestyle
      text-align center
      white-space nowrap
      color #fff
      font-size 20px
      font-weight 10
      width 100%
      margin 13px 0 0
  .login-wraper
    margin-top 20rem
    .input-group
      width 22rem
      height 3rem
      line-height 1.26667rem
      display flex
      margin 0 auto
      opacity 0.5
      border-radius 0.533333rem
      border 1px solid rgba(187, 187, 187, 1)
      padding-left 0.533333rem
      margin-bottom 0.8rem
      background-color red
      label 
        display inline-flex
        width 0.96rem
        opacity 0.8
        color rgba(16, 16, 16, 1)
        font-size 0.373333rem
        font-family Arial
      input 
         display inline-block
         width 100%
         border-radius 0.533333rem
         padding-left 10px
         font-size 0.373333rem
    .forgot-pwd
        margin 10px auto .56rem 1.973333rem
        height .613333rem
        line-height .453333rem
        opacity 0.3
        color rgba(16, 16, 16, 1)
        font-size .32rem
        font-family Arial
    .sign
        margin 0 auto
        width 5.546667rem
        height 1.226667rem
        line-height 1.226667rem
        border-radius .533333rem
        background-color rgba(51, 54, 67, 1)
        text-align center
        left 169px
        opacity 0.8
        color rgba(255, 255, 255, 1)
        font-size .48rem
        font-family Arial
  .register 
    height 0.613333rem
    margin-top 2.16rem
    line-height 0.613333rem
    color white
    font-size 0.373333rem
    text-align center
    font-family Arial
</style>
