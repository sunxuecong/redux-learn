/**
 * 该文件专门为Count组件生成action对象
 */
 import {DECREMENT,INCREMENT} from '../constant'

 //同步 action,就是指action的值为 Object类型的对象
export const increament = data => ({type:INCREMENT,data})
export const decreament = data => ({type:DECREMENT,data})
//异步 action,就是指 action 的值为函数
export const increamentAsync = (data,time) => {
  return (dispatch)=> {
    setTimeout(() => {
      dispatch(increament(data))
    }, time);
  }
}

