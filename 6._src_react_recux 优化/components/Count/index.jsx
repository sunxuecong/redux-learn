import React, { Component } from "react";
import store from "../../redux/store";
//引入action对象专门用于创建action对象
import {createDecreamentAction,createIncreamentAction,createIncreamentAsyncAction} from '../../redux/count_action'

export default class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncreamentAction(value*1));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecreamentAction(value*1));
  };
  //奇数再加
  incrementIfOdd = () => {
    let count = store.getState()
    const { value } = this.selectNumber;
    if (count % 2 !== 0) {
      store.dispatch(createIncreamentAction(value*1));
    }
  };
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    // setTimeout(() => {
      store.dispatch(createIncreamentAsyncAction(value*1),500);
    // }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为{store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>加</button>&nbsp;
        <button onClick={this.decrement}>减</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
