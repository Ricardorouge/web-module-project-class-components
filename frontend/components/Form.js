import React from 'react'

export default class Form extends React.Component {
  
  onSubmit = (evt)=>{
    evt.preventDefault();
    this.props.onSubmit()
  }
  onChange = (evt)=>{
    this.props.onChange(evt.target.value)
  }
  clear = ()=>{
    this.props.clear()
  }

 

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input
          type = 'text'
          value ={this.props.values}
          onChange={this.onChange}
        />
        <button onClick={this.onSubmit}>Submit</button>
        </form>
        <button onClick={this.clear}>Clear Completed</button>
      </div>
    )
  }
}
