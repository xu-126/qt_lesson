import React, { Component } from 'react';

// 每个组件都需要屏幕宽度
// hoc
// 一个高阶组件 withWidth(<header />) this.props.windowWidth
export default function withWindowWidth(Com) {
    class WithWindowWidth extends Component {
        state = { width: window.innerWidth }
        componentDidMount() {
            window.addEventListener('resize',
            () => {
                console.log(this.state.width)
                this.setState({
                    width: window.innerWidth
                })
            })
        }
        render() { 
            // mixin
            return <Com windowWidth={this.state.width}/>
        }
    }
     
    return WithWindowWidth;
}
// export default WithWindowWidth;