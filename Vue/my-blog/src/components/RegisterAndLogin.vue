<template>
  <el-dialog title="登录" :visible="dialogVisible" @close="cancel">
    <el-form label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="params.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="params.password"></el-input>
      </el-form-item>
      <el-formItem v-if="handleFlag === 'register'"
                   label="昵称">
        <el-input v-model="params.name"
                  placeholder="用户名或昵称"
                  autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'"
                   label="手机">
        <el-input v-model="params.phone"
                  placeholder="手机号"
                  autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'"
                   label="简介">
        <el-input v-model="params.desc"
                  placeholder="个人简介"
                  autocomplete="off"></el-input>
      </el-formItem>
    </el-form>
    <div class="dialog-footer" slot="footer">
      <el-button type="success" @click="handleOAuth">github授权成功</el-button>
      <el-button  v-if="handleFlag === 'register'" type="primary" @click="handleOk">注册</el-button>
      <el-button v-else type="primary" @click="handleOk">登录</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from "vue-property-decorator";
import { register } from 'register-service-worker';

@Component
export default class RegisterAndLogin extends Vue {
  @Prop({ default: true }) private visible: boolean;
  @Prop({ default: false }) private handleFlag!: string;
  private params: any = {
    email: '',
    password: '',
    name: '',
    phone: '',
    desc: ''
  }

  get dialogVisible(): boolean {
    console.log(this.visible);
    return this.visible;
  }

  @Emit()
  private cancel(): boolean {
    return false;
  }

  // 获取github授权登录
  private handleOAuth(): void {
    // 保存授权之前的页面链接
    let preventHistory: object = {
      name : this.$route.name,
      query : this.$route.query
    }
    window.sessionStorage.preventHistory = JSON.stringify(preventHistory)
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=a2466a4dd2b084a43d59'
  }

  private handleOk(): void {
    // 杨元庆001Abc@lenovo.com.cn
    const reg = new RegExp('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')
    if (!reg.test(this.params.email)) {
      // 因为已经引入了 element-ui Vue.use(Element) use方法将element里面所有的组件放到了vue的原型链上
      this.$message.error('请输入正确的邮箱格式');
    } else {
      if (!this.params.password){
        this.$message.error('密码不能为空');
      }
    }
    // 信息填写正确 做登录操作
    this.submit()
  }

  private async submit(): Promise<void> {
    let data: any = ''
    if (this.handleFlag === 'register') {
      data = await this.$http.post(this.$url.register,this.params)
    } else {
      data = await this.$http.post(this.$url.login,this.params)
    }

  }
}
</script>

<style>
</style>