import './App.css'
import React from 'react'

class DynamicField extends React.Component {
  // 数据在哪里获取就去哪里修改
  handleAdd = () => {
    this.props.onAdd()
  }
  handleSub = (i) => {
    this.props.onSub(i)
  }
  render() {
    const { rules } = this.props
    return (
      <>
        <label>规则</label>
        {
          rules.map((preRule, index) => {
            return (
              <div key={index}>
                <label>姓名</label>
                <input type="text" data-key="name" data-index={index} value={preRule.name} onChange={(event) => {this.props.onFiledChange(event,'name','age')}}></input>
                <label>年龄</label>
                <input type="text" data-key="age" data-index={index} value={preRule.age} onChange={this.props.onFiledChange}></input>
                <button data-i={index} onClick={(i) => {this.handleSub(index)}}>-{index}</button>
              </div> 
            )
          })
        }
        <br/>
        <button onClick={this.handleAdd}>+</button>
      </>
    )
      
    
  }
}
class App extends React.Component {
  state = {
    date: '',
    rules: [
      {name: '', age: ''}
    ]
  }
  handleAdd = () => {
    // 不建议在原来的数据直接修改
    let rules = this.state.rules.slice(0)
    rules.push({name:'', age: ''})
    this.setState({
      rules
    })
  }
  handleSub = (i) => {
    let rules = this.state.rules.slice(0)
    console.log('sub', i)
    rules.splice(i,1)
    this.setState({
      rules
    })
  }
  handleChange = (event) => {
    const key = event.target.dataset.key;
    const value = event.target.value
    const index = event.target.dataset.index
    let rule = this.state.rules.slice(0)
    rule[parseInt(index)][key] = value
    this.setState({
      rule
    })
  }
  render() {
    const { rules } = this.state
    return (
      <div>
        <label htmlFor="date">日期</label>
        <input type="date" id="date" />
        <br/>
        <DynamicField rules={rules}  onFiledChange={this.handleChange} onAdd={this.handleAdd} onSub={this.handleSub}/>
      </div>
    )
  }
}

export default App
