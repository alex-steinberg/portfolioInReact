import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = (props) => (
    <section className="mw7-ns mw6-m mw5 lh-copy center portfolio">
        <h2>Portfolio of { props.name }</h2>
        <ul className="bullet-list">
            <li><Link to="/portfolio" >Portfolio (using Behance API)</Link></li>
            <li><Link to="//behance.net/steinrock" target="_blank" rel="noopener noreferrer">Behance</Link></li>
        </ul>
    </section>
)

export default Portfolio;