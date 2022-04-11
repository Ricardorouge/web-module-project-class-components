import React from 'react'
import TodoList from './TodoList'
import Form from './Form'


const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]
const initialState ={
  todos:todos,
  form:{
    name:''
  }
}
let idx = 0;
const getIdx =()=> ++idx

export default class App extends React.Component {
  state = initialState

  onSubmit =()=>{
    const newTodo = {
      name:this.state.form.name,
      id:getIdx(),
      completed:false
    }
    this.setState({
     
      todos:[...this.state.todos,newTodo],
      form:initialState.form
    })
    console.log(this.state.todos)
  }
  onChange = (value)=>{
    this.setState({
      form:{
       name:value
      }
    })
  }
  clear =()=>{
    this.setState({
      todos:this.state.todos.filter(todo=>{
        return todo.completed === false;
      })
    })
    console.log(this.state.todos)
  }

  toggleComplete =(id)=>{
    this.setState({
      todos:this.state.todos.map(todo=>{
        return todo.id === id
        ?{...todo,completed:!todo.completed}
        :todo
      })
    })
   console.log(id)
  }

  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <TodoList 
        todos={this.state.todos}
        toggleComplete={this.toggleComplete}
        />
        <Form 
        onSubmit ={this.onSubmit}
        onChange ={this.onChange}
        values = {this.state.form.name}
        clear = {this.clear}
        />
        
      </div>
    )
  }
}
