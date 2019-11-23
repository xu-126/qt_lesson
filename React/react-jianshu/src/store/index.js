import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import homeReducer from '../pages/home/store/reducer'

// fromJs({ home: ,detail: })
const reducer = combineReducers({
    home:homeReducer
})

const store = createStore(reducer,applyMiddleware(thunk))


export default store;