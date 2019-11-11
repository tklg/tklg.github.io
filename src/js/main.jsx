import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header.jsx'
import ProjectList from './components/ProjectList.jsx'
import Footer from './components/Footer.jsx'

import '../scss/app.scss'

class App extends React.Component {
  render () {
    return (
      <div className='root flex-container flex-vertical'>
        <Header />
        <ProjectList />
        {false && <Footer />}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('rr'))
