import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export class TodoPage  extends React.Component {

  constructor(props) {
    super(props);

    //this.props.todos = props.todos

    console.log("In page: " + JSON.stringify(props));
  }

  render() {
    console.log("In render: " + JSON.stringify(this.props));
    const renderedTodos = this.props.todos.map(todo => (

        <tr key={todo.id}>
          <td>{todo.name}</td>
          <td><Link to={`/todos/${todo.id}`} className="button">
            View
          </Link></td>
        </tr>

    ))

    return (
      <table>
        <thead><tr><td>Todo</td><td>Details</td></tr></thead>
        <tbody>
          {renderedTodos}
        </tbody>
      </table>
    )

  }

}
