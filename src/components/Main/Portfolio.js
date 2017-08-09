import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return(
            <section className="mw7-ns mw6-m mw5 lh-copy center portfolio">
                <h2>Portfolio &amp; Social</h2>
                <ul className="bullet-list">
                    <li><a href="//behance.net/steinrock" target="_blank" rel="noopener noreferrer">Behance</a></li>
                    <li><a href="https://www.linkedin.com/in/alex-steinberg-31784764/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://www.twitter.com/steinrockHQ4/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </section>
        )
    }
}

export default Portfolio;