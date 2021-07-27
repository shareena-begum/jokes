import { render } from "@testing-library/react"
import React from "react"
import TodoItem from "./TodoItem.js"
import todosData from "./todosData.js"


class App extends React.Component {
  constructor(){
    super()
      this.state = {
      todos: todosData
    }
  }
 
  render(){
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)
  return (
    <div className="todo-list">
      {todoItems}
    </div>
    )
  }
}

export default App;
