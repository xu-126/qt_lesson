import React from 'react';
import ReactDOM from "react-dom";

// 数组 链表
// 第一次渲染: [{_state: 0},{_deps:{args}},{_deps:{args,value}}]
// 第二次渲染 按照出现的顺序一一取出来

let cursor = 0;
let currentComponent = {
    _hook: []
}
const argsHashChanged = (oldArgs,args) => {
    return !oldArgs || args.some((arg,i) => {
        return oldArgs[i] !== arg
    })
}
function getHookstate(i) {
    const hooks = currentComponent._hook
    if(i >= hooks.length){
        hooks.push({})
    }
    return hooks[i]
}
function myUseState(initState) {
    const hooks = getHookstate(cursor++)
    hooks._value = [
        hooks._value ? hooks._value[0] : initState,
        function setState(newState){
            hooks._value[0] = newState
            render();
        }
    ]
    return hooks._value
}
function Counter(){
    const [ c,setC ]= myUseState(10)
    const [ d,setD ]= myUseState(20)
    return (
        <div>
            d: {d}
            <button onClick={()=> {setD(Math.random())}}>setD</button>
        </div>
    )
}
render()
function render(){
    cursor = 0  
    ReactDOM.render(<Counter />,document.getElementById('count'))
}