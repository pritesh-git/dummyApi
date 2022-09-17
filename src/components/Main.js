import React from 'react'
import './PsCss.css'
const Main = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Users
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Comments">
            Comments
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Posts">
            Posts
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Todos">
            Todos
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Main
