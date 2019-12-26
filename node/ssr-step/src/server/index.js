import React from 'react';
import express from 'express';
import { renderToString 
} from 'react-dom/server';
import Header from '../components/Header';
import render from './render';
import routes from '../routers'
import { matchRoutes } from 'react-router-config';
import { getServerStore } from '../store/index'
/**
 * 构建在 虚拟 dom 之上的 服务端渲染
 * { name： ''， age: '' }
 * { tag: '', attribute: , children: [], class: '' }
 * 
 * MVVM / dom diff
 * react: react-native
 * vue:   weex
 */
const app = new express();
// 前端打包完的 静态资源
// localhost:3000 + 文件名
app.use(express.static('public'))
app.get('*', (req, res) => {
  /**
   * 渲染 html 之前 保证 redux 有数据，渲染出来的页面 就是带有数据的 html
   * 1. 拿到 当前访问 url 命中的组件
   * 2. 拿到 组件上面的 loadData
   * 3. 一个个 dispatch
   * 4. 渲染
   */
  console.log(req.path)
  let promises = []
  const store = getServerStore()
  const matchedRouters = matchRoutes(routes,req.path)
  matchedRouters.forEach(mRouter => {
    // console.log(mRouter.route.loadData)
    if(mRouter.route.loadData) {
      promises.push(mRouter.route.loadData(store))
    }
  })
  Promise.all(promises).then(resArr => {
    const html = render(req);
    res.send(html)
  })
  .catch(err => {
    console.log('服务端出错了',err)
  })
})
app.listen(3000, () => {
  console.log('server is running 3000');
})


