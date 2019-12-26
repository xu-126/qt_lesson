import React,{ useState,useMemo, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

// 缓存组件
// shouldComponentUpdate
// useMemo
// useCallback
function Count (props) {
  const [ value,setValue] = useState(0)
  console.log('render') // 但是子组件还是在更新
  const calc = useMemo(() => {
    console.log('calc')
    return 10 + value
  },[ value ]) // useMemo 提供第二个参数可以自定义是否缓存的情况   [] useMemo 会对第二个参数（数组）浅比较 如果数组没有变化会从缓存里面拿值
  const calc1 = useCallback(() => {
    console.log('calc')
    return 10 + value
  },[ value ])
  return (
    <h3>
      {props.count}--
      {calc}---
      {/* {calc1} */}
      <button onClick={() => {
        setValue(Math.random)
      }}>缓存结果</button>
    </h3>
  )
}
// React.memo 缓存之后子组件就不用更新了
const Count1 = React.memo(Count); // React.memo 把count组件缓存 默认把 thisprops nextprops浅比较
const Count2 = React.memo(Count,(thisProps,nextProps) => { // 第二个参数 比较 两个函数相不相等
  return false;
});

class Abc extends React.PureComponent {} // PureComponent state/props 浅比较
class Abc1 extends React.Component {} // 默认每次 shouldComponentUpdate 都会返回true


function App() {
  const [ count,setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={() => {
        setCount(Math.random()) // 父组件更新
      }}>updateCount</button>
      {/* 子组件保持不变 */}
      <Count1 count={100}/> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
