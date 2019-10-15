- 项目架构，目录
1. api 前后端分离 vue前端 ajax 连接后端 axios  api/v2/products/:1
2. pages component分离
3. vue store 设置
4. utils js 公共方法
5. css/stylus stylus 用的多
20+页面的架构
- 路由
  懒加载 
- page 组件化
- 页面由组件构成
  页面级组件 / 可复用的组件 components
  全站常用的组件 跟业务无关 iview /components/common/
  容器组件
  PC 页面量 切页面的工作交给组件 html section 概念来做
- App.vue 根组件 reset 工作 通用样式
- 界面 + 状态 == 开发完成

# shiyanlou

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
