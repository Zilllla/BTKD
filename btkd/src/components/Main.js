import React from 'react';

import Home from './Home.js';
import About from './About.js';

class Main extends React.Component {
  constructor() {
    super()
  }
  render() {
    return(
      <main>
        {this.props.view.page === 'home' ?
          <Home />
          :
          this.props.view.page === 'about'
          <About />
        }
      </main>
    )
  }
}

export default Main;
