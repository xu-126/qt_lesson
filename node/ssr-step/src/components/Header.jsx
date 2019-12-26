import React from 'react';
import { Link } from 'react-router-dom'
/**
 * { tag: 'div' }
 * 浏览器：react-dom div
 * 服务端：字符串的 html，
 * 同构：
 */
class Header extends React.Component {
  componentWillMount() {
    console.log('component will');
  }
  buy () {
    console.log(123456);
  }
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        {/* home -> 服务端生成html */}
        {/* 点击 login 是js 还是 server?        !!!是前端js把组件切出来了 */}
        {/* 刷新当前页面 是浏览器向后端请求 */}
        我是固定的！4634895702
        <button onClick={this.buy}>buy</button>
      </div>
    )
  }
}

export default Header;