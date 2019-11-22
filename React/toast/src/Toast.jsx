import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group'

let key = 0
class Toast extends Component {
  state = {
    toastList: [
    //   '1', '2'
    ]
  }
  addNotice(icon,content,duration){
    // console.log(1, icon)
    key++
    const item = {key,icon,content,duration};
    let toastList = this.state.toastList.slice(0)
    toastList.push(item)
    this.setState({
        toastList
    })
    setTimeout(() => {
        let toastList1 = this.state.toastList.slice(0)
        let index = toastList1.findIndex(item => item.key === key)
        toastList1.splice(index,1)
        this.setState({
            toastList:toastList1
        })
    },duration)
  }
//   addNotice(icon,content,duration){
//     console.log(2, content)
//   }
  render() {
    const { toastList } = this.state;
    // const { show } = this.props;
    // if (!show) return null;
    return (
      <Transition-group>
      {
        toastList.map((toast) => {
          return (
            // <Notice {...toast} />
        <CSSTransition key={toast.key} classNames="notice" timeout={300}>
            <li ref="ref" key={toast.key}>{toast.icon}:{toast.content}</li>
        </CSSTransition>
          )
        })
      }
      </Transition-group>
    )
  }
}
let instance = null
export default {
    addNotice: function(icon,content,duration){
        // ref 获取真实的dom 节点
        if(instance) {
            return instance.addNotice(
                icon,
                content,
                duration
            )
        }
        let div = document.createElement('div');
        document.body.appendChild(div)
        let objRef = React.createRef() 
        // 获取这个组件的实例
        ReactDom.render(<Toast ref={objRef}/>,div) //toast放到div上面去
        instance = objRef.current
        return objRef.current.addNotice(icon,content,duration)

    }
};
