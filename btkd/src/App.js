import React from 'react';

import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import About from './components/About.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTite: 'Bastrop Unified Tae Kwon-Do'
      }
    }
  }

  handleView = (view) => {
    let pageTite = '';

    switch(view) {
      case 'home':
        pageTite = 'Bastrop Unified Tae Kwon-Do'
        break
      case 'about':
        pageTite = 'About'
        break
      case 'trainers':
        pageTite = 'Our Trainers'
        break
      case 'calendar':
        pageTite = 'Calendar'
        break
      case 'contact':
        pageTite = 'Contact'
        break
        default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTite: pageTite
      }
    })
  }

  render() {
    return (
      <div>
      <Header />

      <Nav handleView={this.handleView}/>

      <Main />

      <Footer />
      </div>
    )
  }
}

export default App;
