<template>
    <div class="component-A">组件A--{{app.user}}
        <comb :send="test"></comb>
    </div>
    
</template>

<script>
import comb from './b.vue'
export default {
    inject:['app'],
    components:{
        comb
    },
    data(){
        return {
            test:'我是AAA'
        }
    },
    provide:{
        name:'wn'
    }
}
</script>

<style>

</style>