/**
 * 该文件是为 person 组件服务的 action
 */
import { ADD_PERSON } from '../constant'

//创建增加一个人的 action 对象
export const  creatAddPersonAction = (personObj) => ({type:ADD_PERSON,data:personObj})
