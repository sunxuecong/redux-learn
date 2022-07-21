import React, { Component } from 'react'
import { connect } from 'react-redux';
import {creatAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    console.log(name,age);
    const personObj = {id:new Date().getTime(),name,age}
    this.props.creatAddPersonAction(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
    console.log(personObj);
  }
  render() {
    return (
      <div>
        <h1>你好我是 person组件</h1>
        <h2>上方组件求和为{this.props.count}</h2>
        <input ref={c => this.nameNode = c} type="text"  placeholder='输入名字'/>
        <input ref={c => this.ageNode = c} type="text"  placeholder='输入年龄'/>
        <button onClick={this.addPerson}>  添加 </button>
        <ul>
          {
            this.props.personList.map((item) => {
              return (
                <li key={item.id}>{item.name}--{item.age}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default connect(state => ({personList:state.person,count:state.count,
}),{creatAddPersonAction} )(Person)
