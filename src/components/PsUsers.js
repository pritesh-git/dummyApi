import React from 'react'

class PsUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usr: [],
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ usr: data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <div>
        <center>
          <h1>USERS List</h1>
        </center>
        <table className="table">
          <thead>
            <tr>
              <th scope="cols">Id</th>
              <th scope="cols">Name</th>
              <th scope="cols">UserName</th>
              <th scope="cols">Email</th>
              <th colSpan="2"></th>
            </tr>
          </thead>
          {this.state.usr.map(usr => (
            <tr>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td>{usr.username}</td>
              <td>{usr.email}</td>
              <td>
                <button type="button" className="btn btn-success" id={usr.id}>
                  EDIT
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-danger" id={usr.id}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default PsUsers
