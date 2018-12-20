import React, {Component} from 'react';
import logo from '../media/img/logo.svg';


class Header extends Component {

    render() {
        return (
            <div className="header-top px-20">
                <img src={logo} className="App-logo" alt="logo"/>
                <h3 className="mb-0 pr-md-4">Developer Blog</h3>
            </div>
        );
    }
}

export default Header;