import React, { Component } from 'react';

const headerImage = require('../../images/template/craftsmanshipP.jpg');

class Header extends Component {
    render() {
        const headerStyle = {
            backgroundImage: 'url(' + headerImage + ')'
        }
        return(
            <header className="h5-ns h5" style={headerStyle}>
                <div className="header-container">
                    <div className="dt h-100 text-center">
                        <div className="white dtc v-mid h-100">
                            <h1><span>A</span>lex <span>S</span>teinberg</h1>
                            <h2 className="serif">Independent JavaScript Developer</h2>
                            <h3 className="serif">Muizenberg, South Africa</h3>
                            <h4>{ this.props.title }</h4>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;