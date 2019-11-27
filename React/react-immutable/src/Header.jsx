import React, { Component } from 'react';
import { is } from 'immutable';
class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {}
        // props的长度(属性个数)是否改变
        if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
          // 更新
          return true
        }
        // props属性个数一样，判断每个属性是否一样 immutable is()
        for (const key in nextProps) {
          if (!is(thisProps[key], nextProps[key])) {
            // 更新
            return true
          }
        }
        // 不更新
        return false
      }

    state = {  }
    render() { 
        window.c ++;
        return(
            <div>
                {this.props.value}
            </div>
        )
    }
}
 
export default Header;