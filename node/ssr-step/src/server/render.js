import React from 'react';
import {
  renderToString
} from 'react-dom/server';
import {
  StaticRouter
} from 'react-router-dom';
import { Provider } from 'react-redux'
// BrowserRouter h5 history api
// 内存 router ['/', '/a', '/a/c']
import { renderRoutes,matchRoutes } from 'react-router-config';
import Header from '../components/Header';
import routes from '../routers';
import { getServerStore } from '../store/index'
export default (req) => {
  // jsx
  const App = (
    <Provider store={store}>
    <StaticRouter location={req.path}>
     {/* <Header /> */}
     <div>
       { renderRoutes(routes) }
     </div>
    </StaticRouter>
    </Provider>
  )
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app">${renderToString(App)}</div>
  <script src="/index.js"></script>
</body>
</html>
  `
}