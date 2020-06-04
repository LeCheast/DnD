import React from 'react';

const Header = () => {
    const linkStyle = {
        color: 'white'
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">DnD Library Look Up</span>
            <div className="navbar-nav ml-auto">
                <a href="https://www.dnd5eapi.co/" style={linkStyle}>API Documentation</a>
            </div>
        </nav>
    );
}

export default Header;