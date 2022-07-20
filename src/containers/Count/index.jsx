/**
 * 这个文件是count组件的容器组件
 */
import Count from "../../../src/components/Count";
import {createIncreamentAction,createDecreamentAction,createIncreamentAsyncAction}from '../../redux/count_action'
//引入connect用来创建容器组件
import { connect } from "react-redux";
//此处左手是组件Count右手是redux的store 但是此处不能直接传store得从容器组件的父组件以props的方式传入

// +++++++++++++++++++++++++++++++++++++++一般写法+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//此函数的返回值作为状态(state)传给了UI组件,等同于<Count state = {}/> 返回值是一个对象
// 返回一个的对象中的key 作为传递给UI组件的props的key,value作为传递给UI组件props的value
// 此函能接收到一个参数为dispatch是react-redux给传入的store的state
function mapStateToProps(state){
  return  {
    count:state
  }
}
//此函数的返回值作为状态(state)传给了UI组件,等同于<Count state = {}/>
// 返回一个的对象中的key 作为传递给UI组件的props的key,value作为传递给UI组件props的value的操作方法
// 此函能接收到一个参数为dispatch是react-redux给传入的store的dispatch
function mapDispathToProps(dispatch){
  return {
    jia: (value) => dispatch(createIncreamentAction(value)),              
    jian: value => dispatch(createDecreamentAction(value)),
    jiaAsync: (value,time) => dispatch(createIncreamentAsyncAction(value,time))
  }
}
//创建并且暴露一个容器组件
export default connect(mapStateToProps,mapDispathToProps)(Count)

// +++++++++++++++++++++++++++++++++++++++精简的写法+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//更推荐精简写法,普通写法mapDispathToProps是一个函数.精简写法是一个对象.
// //精简的写法
// export default connect(state => ({count:state}),{jia:createIncreamentAction,jian:createDecreamentAction,jiaAsync:createIncreamentAsyncAction})(Count)