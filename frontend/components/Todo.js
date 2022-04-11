import React from 'react'


export default class Todo extends React.Component {


  render() {
    const {todo,toggleComplete}=this.props
    
    return (
      <div onClick={()=>toggleComplete(todo.id)}>
        {todo.name} <span>{todo.completed?'✓':''}</span>
      </div>
    )
  }
}
