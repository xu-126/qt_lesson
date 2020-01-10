import React from 'react';
import { createBrowserHistory } from 'history'
import Router from '../react-router/Router.jsx'
class BrowserRouter extends React.Component {
    // 路由的信息 { location listen push go}
    history = createBrowserHistory()
    render(){
        return (
            <Router history={this.history} {...this.props}></Router>
        )
    }
}
export default BrowserRouter