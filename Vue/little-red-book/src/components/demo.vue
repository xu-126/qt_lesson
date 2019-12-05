<template>
  <div class="container">
    <!-- 注意：garen-loadmore要求外面包裹容器(本例.container)
    的高度固定且overflow:hidden,并且garen-loadmore内部数据的高度要大于包裹容器的高度,
    才能触发garen-loadmore的上拉加载功能 -->
        <garen-loadmore @top-method="handleTop"
                        ref="vueLoad"
                        :top-change-text="topChangeText"
                        @top-status-change="handleStatusChange" 
                        @bottom-method="handleBottom" 
                        @bottom-status-change="handleBottomStatusChange" 
                        @bottom-error-click="handleBottomError"
                        :disable-top="false"
                        :disable-bottom="false">
            <note-container :notes="notes"></note-container>
        </garen-loadmore>
    </div>
</template>
<script>
import noteContainer from './noteContainer'
export default {
  name: "List",
  components:{
    noteContainer
  },
  data() {
    return {
      // 提示文案示例  
      topChangeText:{
        pulling:"下拉刷新",
        limit:"释放刷新",
        loading:"正在刷新...",
        complete:"  ",   // 刷新完成暂不提示
      },  
      bottomChangeText:{
        loading:"正在加载更多...",
        nodata:"暂无更多数据",
        error:"请求数据出错，请点击重试",
      },  
      notes:[
              {
                  note:[
                  {
                      img:'https://ci.xiaohongshu.com/97b86c5e-12b8-310f-b5a1-7459c67a6667?imageView2/2/w/540/format/jpg',
                      name:'RIOM里永烘焙培训学校',
                      userImg:'https://img.xiaohongshu.com/avatar/55a8ff7cd6e4a9462d8ff1c4.jpg@80w_80h_90q_1e_1c_1x.jpg',
                      info:'0基础学蛋糕，点❤️立即参与❤️了解学费',
                      likes:44
                  },
                  {
                      img:'https://ci.xiaohongshu.com/ee377d71-e427-3792-bbba-dd7b470b6413?imageView2/2/w/540/format/jpg',
                      name:'芭芭拉拉',
                      userImg:'https://img.xiaohongshu.com/avatar/5db7c4254dc181000149e5ab.jpg@80w_80h_90q_1e_1c_1x.jpg',
                      info:'毕业啦🎓 悉尼大学毕业指南（cs专业）',
                      likes:18                  
                  }
                ],
              },
              {
                  note:[
                  {
                      img:'https://ci.xiaohongshu.com/39460dd2-8be6-3dcd-878e-222f34c46544?imageView2/2/w/540/format/jpg',
                      name:'朱NaNaBaby',
                      userImg:'https://img.xiaohongshu.com/avatar/5d560857e1cd0d0001eb78c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
                      info:'济州岛ins风咖啡店❗️打卡',
                      likes:126
                  },
                  {
                      img:'https://ci.xiaohongshu.com/34b09c21-6262-3215-bf0d-b575d1ab5158?imageView2/2/w/540/format/jpg',
                      name:'文怡',
                      userImg:'https://img.xiaohongshu.com/avatar/5d89c0c2b3f0a60001308dad.jpg@80w_80h_90q_1e_1c_1x.jpg',
                      info:'俱乐部三明治洋快餐在家也能做，超好吃',
                      likes:111                 
                  }
                ]
            }
          ]    // 模拟数据
    };
  },
  // 实现进入详情页返回列表位置功能-搭配keep-alive
  beforeRouteLeave(to, from, next) {
    // 如果进入详情页
    if (to.name === "Detail") {
        // 获得滚动距离
      let scrollTop = this.$refs.vueLoad.getScrollTop();
      // 设置缓存
      sessionStorage.setItem("listScrollTop", scrollTop);
    } else {
      // 如果去其他页移除缓存  
      sessionStorage.removeItem("listScrollTop");
    }
    next();
  },
  activated() {
    // 激活路由  
    let scrollTop = sessionStorage.getItem("listScrollTop");
    // 判断来源
    if (scrollTop == null) {
      console.log("不需要缓存的页面");
    } else {
     // 需要缓存的页面,滚动到指定位置
      this.$refs.vueLoad.setScrollTop(scrollTop);
    }
  },
  deactivated() {

  },
  methods: {
    handleTop() {
      // 下拉刷新  
      // 定时器用来模拟下拉刷新接口延迟时间
      setTimeout(() => {
         // 模拟数据更新
        this.notes=[
              {
                  note:[
          
                  {
                      img:'https://ci.xiaohongshu.com/ee377d71-e427-3792-bbba-dd7b470b6413?imageView2/2/w/540/format/jpg',
                      name:'芭芭拉拉',
                      userImg:'https://img.xiaohongshu.com/avatar/5db7c4254dc181000149e5ab.jpg@80w_80h_90q_1e_1c_1x.jpg',
                      info:'毕业啦🎓 悉尼大学毕业指南（cs专业）',
                      likes:18                  
                  }
                ],
              },
              {
                  note:[
                  {
                      img:'https://ci.xiaohongshu.com/34b09c21-6262-3215-bf0d-b575d1ab5158?imageView2/2/w/540/format/jpg',
                      name:'文怡',
                      userImg:'https://img.xiaohongshu.com/avatar/5d89c0c2b3f0a60001308dad.jpg@80w_80h_90q_1e_1c_1x.jpg',
                      info:'俱乐部三明治洋快餐在家也能做，超好吃',
                      likes:111                 
                  }
                ]
            }
          ]  
        // 数据跟新完调用该方法使garen-loadmore滚到顶部
        this.$refs.vueLoad.onTopLoaded();
      }, 1000);
    },
    handleStatusChange(status) {
      // status监控下拉刷新状态--等待/下拉/到达阙值/刷新/刷新完成
      const TOPSTATUS = {
        wait: "wait",
        pulling: "pulling",
        limit: "limit",
        loading: "loading",
        complete: "complete"
      }; 
      console.log(status, "statuschange");
    },
    handleBottomStatusChange(status) {
      // status监控上拉加载状态--等待/加载/没有更多数据/数据请求出错  
      const BOTTOMSTATUS = {
        wait: "wait",
        loading: "loading",
        nodata: "nodata",
        error: "error"
      };
      console.log(status, "bottomchange");
    },
    handleBottom() {
      // 上拉加载
      // 定时器用来模拟上拉加载接口延迟时间
      setTimeout(() => {
      // 模拟数据更新
        this.notes=[
              {
                  note:[
          
                  {
                      img:'https://ci.xiaohongshu.com/ee377d71-e427-3792-bbba-dd7b470b6413?imageView2/2/w/540/format/jpg',
                      name:'芭芭拉拉',
                      userImg:'https://img.xiaohongshu.com/avatar/5db7c4254dc181000149e5ab.jpg@80w_80h_90q_1e_1c_1x.jpg',
                      info:'毕业啦🎓 悉尼大学毕业指南（cs专业）',
                      likes:18                  
                  }
                ],
              },
              {
                  note:[
                  {
                      img:'https://ci.xiaohongshu.com/34b09c21-6262-3215-bf0d-b575d1ab5158?imageView2/2/w/540/format/jpg',
                      name:'文怡',
                      userImg:'https://img.xiaohongshu.com/avatar/5d89c0c2b3f0a60001308dad.jpg@80w_80h_90q_1e_1c_1x.jpg',
                      info:'俱乐部三明治洋快餐在家也能做，超好吃',
                      likes:111                 
                  }
                ]
            }
          ]  
        /** 
        *  数据跟新完调用该方法使数据加载中提示消失
        *  注意:如果没有更多数据参数传false
        *  this.$refs.vueLoad.onBottomLoaded(false)
        *  注意:如果数据请求错误可调用错误处理状态
        *  this.$refs.vueLoad.onBottomError()
        */
        this.$refs.vueLoad.onBottomLoaded();
      }, 1000);
    },
    // 如果是错误状态，点击从新请求数据
    handleBottomError(){
        this.handleBottom()
    }
  },
  mounted() {
    // console.log("mounted");
  }
};

</script>
<style scoped>
.container{
    height:100%;
    width:100%;
    overflow: hidden;
    background: #f5f5f5;
}
.item{
    height:150px;
    margin-bottom:20px;
    background: #fff;
    overflow: hidden;
}
/* 注意：伪类选择最后一项是nth-last-of-type(2)不是(1) */
.item:nth-last-of-type(2){
    margin-bottom:0;
}
</style>