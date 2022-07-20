/**
 * 该文件专门用于创建一个store 对象,整个应用只有一个 store 对象
 * 
 */
// 引入创建store的createStore
// applyMiddleware为执行中间间,作为 createStore的第二个参数传进去,用于支持异步 action
// applyMiddleware本身为一个函数,传入 thunk 作为参数
import { legacy_createStore as createStore ,applyMiddleware} from "redux";
//引入为 Count 服务的 reduce
import contReducer from './count_reducer'
//引入 redux-thunk用于支持异步 action
import thunk from "redux-thunk";


export default  createStore(contReducer,applyMiddleware(thunk))