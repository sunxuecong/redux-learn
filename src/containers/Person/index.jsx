import React, { Component } from 'react'


export default class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    console.log(name,age);
    const personObj = {id:'2223233',name,age}
    console.log(personObj);
  }
  render() {
    return (
      <div>
        <h1>你好我是 person组件</h1>
        <input ref={c => this.nameNode = c} type="text"  placeholder='输入名字'/>
        <input ref={c => this.ageNode = c} type="text"  placeholder='输入年龄'/>
        <button onClick={this.addPerson}>  添加 </button>
        <ul>
          <li>名字1 -- 年龄1</li>
          <li>名字1 -- 年龄1</li>
          <li>名字1 -- 年龄1</li>
          <li>名字1 -- 年龄1</li>
        </ul>
      </div>
    )
  }
}
