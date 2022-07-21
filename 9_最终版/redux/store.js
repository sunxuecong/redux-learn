/**
 * 该文件专门用于创建一个store 对象,整个应用只有一个 store 对象
 * 
 */
// 引入创建store的createStore，专门用于创建redux最为核心的store对象
// applyMiddleware为执行中间间,作为 createStore的第二个参数传进去,用于支持异步 action
// applyMiddleware本身为一个函数,传入 thunk 作为参数
import { legacy_createStore as createStore ,applyMiddleware} from "redux";
//引入 redux-thunk用于支持异步 action
import thunk from "redux-thunk";
//引入redux开发者工具，只有他才能让开发者工具显示出来。
//composeWithDevTools作为createStore的第二个参数传进去。
import {composeWithDevTools} from 'redux-devtools-extension'
//引入汇总的reducer
import allReducers from './reducers/index'


export default  createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))