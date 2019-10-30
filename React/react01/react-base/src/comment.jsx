import React,{ Component } from "react";

class Input extends Component {
    state = {
        value: ''
    }
    // 箭头函数 this
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            value
        })
    }
    // 单项数据流
    // input 受控组件 完全受 state.value控制
    handleSubmit = () => {
        const { value } = this.state
        const { onReceive } = this.props
        // 回调函数
        onReceive(value)
        console.log(value)
    }
    render(){
        const { value } = this.state;
        return (
        <>
            <input type="text" value={value} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>submit</button>
        </>
        )
    }
}
class CommonList extends Component {
    render() {
        const { clist } = this.props
        return(
            <React.Fragment>{clist.map((list,index) => {
                return(
                    <li key={index}> { list.content} </li>
                )
            })}</React.Fragment>
        )
    }
}
class Comment extends Component {
    state = {
        clist: [
            { content:'666' }
        ]
    }
    handleReceiveComment = (value) => {
        console.log('value',value)
        this.setState({
            
        })
    }
    render() {
        const { clist } = this.state
        return(
            <>
                <Input onReceive = { this.handleReceiveComment }/>
                <CommonList clist={clist} />
            </>
        )
    }
}

export default Comment;