import React from 'react'

class PsPosts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pst: [],
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({ pst: data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <div>
        <center>
          <h1>Posts List</h1>
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
          {this.state.pst.map(pst => (
            <tr>
              <td>{pst.userId}</td>
              <td>{pst.id}</td>
              <td>{pst.title}</td>
              <td>{pst.body}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default PsPosts
