/**
 * 该组件专门为Count组件生成action对象
 */
 import {DECREMENT,INCREMENT} from '../redux/constant'

export const createIncreamentAction = data => ({type:INCREMENT,data})
export const createDecreamentAction = data => ({type:DECREMENT,data})
