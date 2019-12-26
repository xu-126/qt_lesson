import React, {  Component, useState } from 'react'
import AutoBind from './autoBind'
// 所有自定义的hooks都以use开头 
// hooks只能在函数组件内部用
function useFormInput(val) {
    const [value,setValue] = useState(val)
    const onChange = function (e) {
        setValue(e.target.value)
    }
    return {
        value,onChange
    }
}
function Input2() {
    const username = useFormInput('default'); // val 传过来的默认值
    return (
        <input type="text" {...username}/>
    )
}
class Input1 extends Component  {
    state = {
        val1: '1',
        val2: '2'
    }
    handleVal1 = (e) => {
        this.setState({
            val1 : e.target.value
        })
    }
    render(){
        const { val1} = this.state
        // state -> value -> onChange -> state
        return (
            <div>
                <input type="text" value={val1} onChange={this.handleVal1}/>
                <AutoBind vmodel = 'val2' ctx={this}>
                    <input type="text"/>
                </AutoBind>
                <Input2 />
            </div>
        )
    }
}
// React.createElement('div',)
// React.createElement('input')
export default Input1;