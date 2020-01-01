import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function renderHeader (auth) {
    switch(auth) {
        case null:
            return 'Still deciding';
        case false:
            return <a href="/auth/google">Login With Google</a>;
        default:
            return <a href="/api/logout">Logout</a>;;
    }
} 

function Header(props) {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link
                    to={props.auth ? '/surveys' : '/'}
                    className="brand-logo">
                    Emaily
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>{renderHeader(props.auth)}</li>
                </ul>
            </div>
        </nav>
    )
}

function mapStateToProps (state) {
    return state;
}

export default connect(mapStateToProps)(Header);