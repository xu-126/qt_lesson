import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import routes from '../routers'
import { renderRoutes } from 'react-router-config'
import { getClientStore} from '../store/index'
import { Provider} from 'react-redux'

const App = function() {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
      {/* <Route path="/"/> */}
        {/* <Header /> */}
        <div>
          { renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </Provider>
  )
}
// 复用 已有的 html 负责事件
ReactDom.hydrate(<App />, 
  document.getElementById('app'));
