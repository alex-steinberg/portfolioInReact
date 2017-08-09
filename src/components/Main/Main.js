import React, { Component } from 'react';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Clients from './Clients.js';
import Contact from './Contact.js';

class Main extends Component {
    render() {
        return(
            <main>
                <About />
                <Portfolio />
                <Clients />
                <Contact />
            </main>
        )
    }
}

export default Main;