import React from "react";

function Header(props) {
    return (
        <nav className="navbar navbar-light justify-content-center bg-light">
            <span className="navbar-brand pt-0 h1 text-secondary text-uppercase">{props.title}</span>
        </nav>
    );
}

export default Header;