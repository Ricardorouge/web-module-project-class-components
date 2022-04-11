import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {



  render() {
    const {todos,toggleComplete} = this.props
    
     
    return (
      <div>
        {
          todos.map(todo=>{
            return <Todo todo={todo}key ={todo.id} toggleComplete ={toggleComplete}/>
          })
        }
      </div>
    )
  }
}
