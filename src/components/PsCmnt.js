import React from 'react'

class PsCmnt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cmnt: [],
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({ cmnt: data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <div>
        <center>
          <h1>Comments List</h1>
        </center>
        <table className="table">
          <thead>
            <tr>
              <th scope="cols">User-Id</th>
              <th scope="cols">Id</th>
              <th scope="cols">Title</th>
              <th scope="cols">Body</th>
            </tr>
          </thead>
          {this.state.cmnt.map(cmnt => (
            <tr>
              <td>{cmnt.userId}</td>
              <td>{cmnt.id}</td>
              <td>{cmnt.title}</td>
              <td>{cmnt.body}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default PsCmnt
