
import React,{useState, useEffect,useMemo} from 'react';
import ReactDOM from 'react-dom';
import './order.jsx'

let _state
function myUseState(initState){
    _state = _state || initState
    function setState(newState) {
        _state = newState;
        // 重新渲染
        render();
    }
    return [_state,setState]
}

let _deps = { // 依赖
    args: null // 上一次的第二个参数存进来
}
function myUseEffect(cb,args) {
    const hasChange = args && args.some(
        (arg,index) => {
            return arg !== _deps.args[index]      
        })
        //没有依赖 或者 如果有 依赖， 并且依赖改变
        if(!_deps.args || hasChange){
            cb(); // 执行回调
            _deps.args = args
        }
}


let _depsMemo = {
    args: null,
    value: null
  }  
function myUseMemo(cb, args) {
    const hasChange = args &&
    args.some((arg, index) => {
      return _depsMemo.args && 
      arg !== _depsMemo.args[index];
    })
    if (hasChange || !_depsMemo.args) {
      _depsMemo.value = cb();
      _depsMemo.args = args;
      return _depsMemo.value
    }
    return _depsMemo.value
}

// useCallback 通过 useMemo实现
  
function Counter() {
    const [count , setCount ] = myUseState(0);
    // count 存起来了  闭包
    myUseEffect(() => {
        console.log('did mount')
    },[])
    let res = myUseMemo(() => {return count * 100},[count])
    return (
        <div>
            count: { count }   
            res: { res }
            
            <button onClick={() => {setCount(Math.random())}}>btn</button>
        </div>
    )
}

render();
function render() {
    ReactDOM.render(<Counter />, document.getElementById('root'));
}

