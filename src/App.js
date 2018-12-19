
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./componenets/Weather";

class App extends Component {

    render() {
        return (
            <div>
                <div className="header-top pt-5">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <Weather />
            </div>
        );
    }
}

export default App;
