import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header'
class App extends Component {
  render() { 
    const props = this.props;
    return ( 
      <div>
        <Header />
        App
        {/* <h1></h1> */}
        {/* 把命中 子路由 再在这里渲染一次 */}
        { renderRoutes(props.route.routes) }
      </div>
     );
  }
}
 
export default App;