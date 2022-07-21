/**
 * 这个文件是count组件的容器组件和 UI 组件一体的组件
 */

// 引入 action
import {increament,decreament,increamentAsync,} from "../../redux/actions/count"
//引入connect用来创建容器组件
import { connect } from "react-redux";
import React, { Component } from "react";

// 创建一个 UI 组件
class Count extends Component {
  //加
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increament(value * 1);
  };
  //减
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decreament(value * 1);
  };
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    let count = this.props.count;
    if (count % 2 != 0) {
      this.props.increament(value * 1);
    }
  };
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.increamentAsync(value * 1, 500);
  };
  render() {
    return (
      <div>
        <h1>你好我是 count组件</h1>
        <h2>当前求和为{this.props.count},下方组件总人数为{this.props.personList.length}</h2>
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

//创建并且暴露一个容器组件
export default connect(
  (state) => ({
    count:state.count,
    personList:state.person
  }),
  {increament,decreament,increamentAsync}
)(Count);
