import React, { Component } from 'react';

class Clients extends Component {
    render() {
        return(
            <section className="mw7-ns mw6-m mw5 lh-copy center">
                <h2>Clients</h2>
                <p>Current and past clients include:</p>
                <ul className="bullet-list">
                    <li>
                        <a href="http://www.polymorph.co.za" target="_blank" rel="noopener noreferrer"><span>Polymorph</span></a>
                    </li>
                    <li>
                        <a href="http://www.chicagodigital.com" target="_blank" rel="noopener noreferrer"><span>Chicago Digital</span></a>
                    </li>
                    <li>
                        <a href="http://www.surgedigital.co.za" target="_blank" rel="noopener noreferrer"><span>Surge Digital</span></a>
                    </li>
                    <li>
                        <a href="http://www.steltix.com" target="_blank" rel="noopener noreferrer"><span>Steltix SA</span></a>
                    </li>
                    <li>
                        <a href="http://www.palmstrings.co.za" target="_blank" rel="noopener noreferrer"><span>Palm Strings</span></a>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Clients;