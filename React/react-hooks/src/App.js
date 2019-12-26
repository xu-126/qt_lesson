import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Input1 from './input1'
import withWidth from './WidthHoc'

function Width({ windowWidth }) {
  return (
    <h2>{ windowWidth }</h2>
  )
}

const WithWindowWindth = withWidth(Width)
console.log(WithWindowWindth)

function useWidth() {
  const [width,setWidth ] = useState(window.innerWidth)
  // const { hight,setHight } = useState();
  // didMount
  const handleSize = ()=>{
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize',handleSize)
    return () => {
      // unMount
      window.removeEventListener('resize',handleSize)
    }
  })
  return width;
}
function Width2(){
  const width = useWidth('')
  return (
  <h3>{width}</h3>
  )
}

function App() {
  return (
    <>
      <Input1 />
      <WithWindowWindth />
      <Width2 />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
