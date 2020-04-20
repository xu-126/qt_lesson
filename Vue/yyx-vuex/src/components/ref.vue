import { Message } from 'element-ui';
<template>
    <div @click="getRef">
      <h3>{{message}}</h3>
        <input type="text" ref="t" />
        <button @click="add">添加</button>
        <button  >b1</button>
        <button >b2</button>
        <button >b3</button>
    </div>
</template>

<script>
export default {
  name: 'ref',
  data () {
    return {
      message:''
    }
  },
  methods: {
      add(){
           this.$refs.t.value ="22";
           console.log(this.$refs.t.value)
      },
      on() {
          console.log('收到'+ this.$refs)
      },
      getMessage(m) {
        this.message = m;
      },
      getRef(e) {
        var a = e.target.innerText;
        console.log(a),
         this.$emit('get','a')
      }
  },
  // mounted() {
  //   this.$emit('get',)
  // }
}
</script>