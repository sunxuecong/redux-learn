/**
 * 该文件是为person组件服务的 reducer
 */
import  {ADD_PERSON} from '../constant'
const init = [{id:'0001',name:'张三',age:'19'}]

export default function personReducer(preState = init,action){
  let {type,data}  = action
  switch (type) {
    case ADD_PERSON:
      return [data,...preState]
    default:
      return preState
  }
}   