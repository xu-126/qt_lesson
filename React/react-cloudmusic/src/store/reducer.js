import {
  combineReducers
} from 'redux-immutable'
// import {
//   combineReducers
// } from 'redux';
// { recommend: {} }
// immutable 结构的 对象
import {
  reducer as recommendReducer
} from '../application/recommend/store/index';
export default combineReducers({
  recommend: recommendReducer
})
