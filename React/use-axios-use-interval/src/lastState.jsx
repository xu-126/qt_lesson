import React, { useState,useEffect,useRef,useContext } from 'react';
// let preCount = 0
const Context = React.createContext('red')
function PrevState() {
    let [state,dispatch] = useContext(Context)
    let [ count,setCount ] = useState(0)
    let obj = {current: 123}
    // useEffect(()=> {
    //     preCount = count;
    // })
    let ref = useRef() // {current: ''} 每次useRef 返回的值 都是上一次current 的值
    let refInterval = useRef()
    useEffect(() => {
        ref.current = count;
    })
    useEffect(()=> {
        setInterval(()=> {
            // console.log('count:' + count) // count 的值是初始的  count + 1 后 这里 count 没变9
            // setCount(count + 1)
            // refIenterval.current()
            setCount(count => count + 1)
        },1000)
    },[])

    useEffect(()=> {
        refInterval.current = function() {
            setCount(count + 1)
        }
    })
    const preCount = ref.current
    return (
        <Context.Provider value={state}>
        <div>
            <button onClick={()=> {count++ ;setCount(count)}}>count++</button>
            count: {count}
            preCount: {preCount}
        </div>
        <div>
        {/* <Context.Consumer>
            {
                (store) => {
                     return <p>{JSON.stringify(store)}</p>
                }
            }
        </Context.Consumer> */}
        { <p>{state}</p> }   {/* 数据也可以从 useContext 里面来 */}
        </div>
        </Context.Provider>
    )
}
export default PrevState;