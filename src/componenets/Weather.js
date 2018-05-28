import React from 'react';
import {Component} from "react";
import {Navbar, NavItem, Nav, Grid, Row, Col} from "react-bootstrap";

const PLACES = [
    {name: "Kharkov", zip: "61000"},
    {name: "San Jose", zip: "94088"},
    {name: "Santa Cruz", zip: "95062"},
    {name: "Honolulu", zip: "96803"}
];

class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: null
        };
    }

    componentDidMount() {
        const zip = this.props.zip;
        const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
            zip +
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({weatherData: json});
        });
    }

    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div className="preload">Loading</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div>
                <h1>
                    {weather.main} in {weatherData.name}
                    <img src={iconUrl} alt={weatherData.description}/>
                </h1>
                <p>Current: {weatherData.main.temp}°</p>
                <p>High: {weatherData.main.temp_max}°</p>
                <p>Low: {weatherData.main.temp_min}°</p>
                <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
            </div>
        );
    }
}

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0,
        }
    }

    render() {
        const activePlace = this.state.activePlace;
        return (

            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            React Simple Weather App
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Select a city</h3>
                            <div className="switch">
                                <Nav
                                    bsStyle="pills"
                                    stacked
                                    activeKey={activePlace}
                                    onSelect={index => {
                                        this.setState({activePlace: index});
                                    }}
                                >
                                    {PLACES.map((place, index) => (
                                        <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                                    ))}
                                </Nav>
                            </div>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Weather;