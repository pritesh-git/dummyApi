import React from 'react'

class PsTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: [],
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        this.setState({ todo: data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <div>
        <center>
          <h1>ToDo List</h1>
        </center>
        <table className="table">
          <thead>
            <tr>
              <th scope="cols">User-Id</th>
              <th scope="cols">Id</th>
              <th scope="cols">Title</th>
              <th scope="cols">Completed</th>
            </tr>
          </thead>
          {this.state.todo.map(todo => (
            <tr>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default PsTodo
