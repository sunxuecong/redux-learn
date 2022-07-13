/**
 * 该文件是用于创建一个为 count 组件服务的 reducer，reducer 的本质是一个函数
 * reducer 会接到2个参数，分别为：之前的状态(preState)和动作对象(action)
 */

import Count from "../components/Count"

// 初始化的值
const initState = 99

function countReducer (preState = initState,action){
  // 从 action 对象中获取 type 和 data
  const {type,data} = action
  switch (type) {
    case 'increment'://如果是加
      return preState + data
    case 'decrement'://如果是减
        return preState  - data 
    default:
      return preState
  }
}
export default countReducer