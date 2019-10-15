<template>
  <div ref="display"></div>
</template>

<script>
import vue from 'vue'
import randomStr from '../../utils/randomStr'
export default {
    props:{
        code:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            html:'',
            css:'',
            js:''
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>