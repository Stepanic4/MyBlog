import React from 'react';
import {Component} from 'react';
import Sun from '../media/img/sun.svg';


class Description extends Component {

    render() {
        return (
            <div>
                <div className={'description-api'}>
                    API for weather forecast was taken from the site:
                    <a href="https://openweathermap.org/">
                        <img src={Sun} className={'logo-sun'} alt="sun"/>
                    </a>
                    <p>The weather forecast is displayed in accordance with your local time. Please pay attention to it
                        when you will watch the weather in another time zone.
                    </p>
                    <p>
                        Work on the next API continues.....
                    </p>
                </div>
            </div>
        );
    }

}

export default Description;