/**
 * 该文件专门用于创建一个store 对象,整个应用只有一个 store 对象
 * 
 */
// 引入创建store的createStore
// applyMiddleware为执行中间间,作为 createStore的第二个参数传进去,用于支持异步 action
// applyMiddleware本身为一个函数,传入 thunk 作为参数
import { legacy_createStore as createStore ,applyMiddleware,combineReducers} from "redux";
//引入为 Count 服务的 reduce
import countReducer from './reducers/count'
import personReducer from "./reducers/person";

//引入 redux-thunk用于支持异步 action
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'


// combineReducers用于合并reducer,
// +++++++++++++++combineReducers里所传的对象就是redux帮我们保存的总状态对象+++++++++++++++++++
// +++++++++++++++combineReducers里所传的对象就是redux帮我们保存的总状态对象+++++++++++++++++++
// +++++++++++++++combineReducers里所传的对象就是redux帮我们保存的总状态对象+++++++++++++++++++
let allReducers = combineReducers({
  countReducer,
  personReducer
})

export default  createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))