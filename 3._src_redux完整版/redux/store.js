/**
 * 该文件专门用于创建一个store 对象,整个应用只有一个 store 对象
 * 
 */
// 引入创建store的
import { legacy_createStore as createStore } from "redux";

import contReducer from './count_reducer'


export default  createStore(contReducer)