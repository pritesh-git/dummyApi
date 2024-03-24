import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Main from './components/Main'
import PsCmnt from './components/PsCmnt'
import PsPosts from './components/PsPosts'
import PsTodo from './components/PsTodo'
import PsUsers from './components/PsUsers'

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
            <Route path="/Todo" element={<PsTodo />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
