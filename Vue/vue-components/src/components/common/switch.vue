<template>
    <div>
        <div class="switch">
            <button @click="open">开关</button>
            <!-- <button @click="todo">点击</button> -->
        </div>
        <child></child>
    </div>

</template>

<script>
import child from './child'
export default {
    components:{
        child
    },
    data(){
        return{
            switch:false
        }
    },
    mounted(){
        this.$on('test',(text)=>{
                console.log(text)
            })
    },
    methods:{
        open(){
            this.$emit('test',666)
        }
    }
}
</script>

<style>

</style>