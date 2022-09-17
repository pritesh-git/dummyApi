import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import PsUsers from './components/PsUsers'
import PsTodos from './components/PsTodos'
import PsPosts from './components/PsPosts'
import PsCmnt from './components/PsCmnt'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './components/Main'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Main />
          <Routes>
            <Route exact path="/" element={<PsUsers />} />
            <Route path="/Comments" element={<PsCmnt />} />
            <Route path="/Posts" element={<PsPosts />} />
            <Route path="/Todos" element={<PsTodos />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
