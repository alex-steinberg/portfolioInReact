import React, { Component } from 'react';
import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js'
import Footer from './components/Footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="w-100 sans-serif">
        <div className="clearfix border">
          <div className="col col-8 mx-auto">
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
