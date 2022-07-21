/**
 * 该文件专门汇总所有的reducer成为一个总的ruducer 
 */
//引入combineReducers 用于合并所有的reducer
 import {combineReducers} from "redux";
//引入为 Count 服务的 reduce
import count from '../reducers/count'
//引入为Person组件服务的reducer
import person from "../reducers/person";
// combineReducers用于合并reducer,
// +++++++++++++++combineReducers里所传的对象就是redux帮我们保存的总状态对象+++++++++++++++++++
// +++++++++++++++combineReducers里所传的对象就是redux帮我们保存的总状态对象+++++++++++++++++++
// +++++++++++++++combineReducers里所传的对象就是redux帮我们保存的总状态对象+++++++++++++++++++
export default combineReducers({
  count,
  person
})
