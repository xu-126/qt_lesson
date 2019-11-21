<template>
  	<div>
        <div id="apps">
          <nav>
              <p v-for="(item,index) in arrs"
                    @click="toggle(index)"
                    :class="{active:index==active}"
                :key="index">{{item}}</p>
          </nav>
      </div>
      <tab-c></tab-c>
    </div>
    
</template>

<script>
import tabC from './tabC.vue';
export default {
    components:{
        tabC
    },
    data() {
    return {
      active: 0,
      arrs: ["菜单1", "菜单2", "菜单3"]
    };
 },
 methods: {
	toggle(index) {
      this.active = index;
      if(index==0){
        var offsetWidth = 0;
        this.currentPlay = "red";
      }
      else if(index==1){
        var offsetWidth = -window.innerWidth;
        this.currentPlay = "blue";
      }
      else if(index==2){
        this.currentPlay = "yellow";
        var offsetWidth = -window.innerWidth*2;
      }
      //这里的transform是针对最开始的位置而言，而不是移动过程中的位置
      this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`;
    },

    }
}
</script>

<style>
#apps{ width: 100%; overflow:hidden; } 
#apps nav{ padding: 0 10px; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: middle; -ms-flex-align: middle; align-items: middle; overflow: auto; } 
#apps p{ text-align: center; font-size: 16px; -ms-flex-negative: 0; flex-shrink: 0; padding: 10px; margin: 5px;}
#apps p.active{ color: #ffff00; background-color: #000000; }

</style>