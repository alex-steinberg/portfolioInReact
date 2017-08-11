import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return(
            <section className="mw7-ns mw6-m mw5 lh-copy center portfolio">
                <h2>Portfolio</h2>
                <ul className="bullet-list">
                    <li><a href="/portfolio">Portfolio (using Behance API)</a></li>
                    <li><a href="//behance.net/steinrock" target="_blank" rel="noopener noreferrer">Behance</a></li>
                </ul>
            </section>
        )
    }
}

export default Portfolio;