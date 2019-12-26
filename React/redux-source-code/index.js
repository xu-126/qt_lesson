// reducer -> store
const createStore = (reducer) => {
    // 生成默认store
    let currentState;
    currentState = reducer({},{
        type: '@@redux/INIT'
    });
    let listeners = [];
    function subscribe(cb){
        listeners.push(cb)
    }
    function getState(){
        return currentState;
    }
    // action: plain Object()
    // dispatch -> action -> reducer -> store
    function dispatch(action){
        // 再调用 reducer
        currentState = reducer(currentState,action);
        // 发布/通知
        for(let cb of listeners) {
            cb()
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
function combineReducer(reducers){
    const finalReducerKeys = Object.keys(reducers);
    //生成reducer
    // {count: 0, count1:0}
    return (state = {}, action) => {
        console.log('state',state)
        let nextState = {}
        for (let i = 0; i < finalReducerKeys.length;i++){
            let key = finalReducerKeys[i];
            let reducer = reducers[key];
            const previousState = state[key]
            nextState[key] = reducer(
                previousState,
                action
            )
        }
        return nextState
    }
}
export { createStore,combineReducer}