// // 节流 
// let pre = 0
// function fetch(){
//     let now = now
//     if(now - pre >= wait){
//         console.log('123')
//     }
// }
// btn.mouseMove = fetch
// btn1.mouseMove = fetch1
// // 过程 抽象
// // 高阶函数
// _.throte(fun,300)
// function myThrotle(func){
//     let pre = 0
//     return function(...args){
//         let now = now
//         if (now - pre >= ){
//             func(...args)
//         }
//     }
// }
// function fetch1(a,b) => a + b;

import React, { Component } from 'react'
import { Spin } from 'antd'
export default function(Com){
    // state = {
    //     isLoading: false
    // }
    class withLoading extends Component {
        state = {
            isLoading : false
        }
        ref = React.createRef()
        componentDidMount(){
            this.setState({
                isLoading:true
            })
            this.ref.current.initLoading()
            .then(data => {
                this.setState({
                    isLoading:false
                })
            })
            .catch(err => {
                this.setState({
                    isLoading:false
                })
            })
        }
        render(){
            const props = this.props
            return (
                <Spin spinning={this.state.isLoading}>
                    {/* ref获取这个组件的实例 */}
                    <Com 
                    from="fromWithLoading"
                    ref={this.ref} {...props}/> 
                </Spin>
            )
        }
    }
    return withLoading
}