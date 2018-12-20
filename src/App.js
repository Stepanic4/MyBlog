import React, {Component} from 'react';
import './styles/App.css';
import Weather from "./componenets/Weather";
import Description from "./componenets/Description";
import Header from "./componenets/Header";
import {Footer} from "./componenets/footer";

class App extends Component {

    render() {
        return (
            <div>
                <div className={'wrapper'}>
                    <Header/>
                    <div className={'content'}>
                        <h4 className={'text-center py-20 pt-50'}>Welcome to the developer blog!</h4>
                        <div className={'row'}>
                            <div className={'col d-sm-px-0 mb-4'}>
                                <Weather/>
                            </div>
                            <div className={'col-sm'}>
                                <Description/>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
