import React from 'react';
import {Component} from "react";
import {Navbar, NavItem, Nav, Grid, Row, Col} from "react-bootstrap";

const PLACES = [
    {name: "Kharkiv", zip: "61157"},
    {name: "Kiev", zip: "03134"},
    {name: "Mykolaiv", zip: "65481"},
    {name: "Lviv", zip: "79007"}
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
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
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
            <div className="text-center">
                <h1>
                    {weather.main} in {weatherData.name}
                    <img src={iconUrl} alt={weatherData.description}/>
                </h1>
                <p>Температура: {weatherData.main.temp}°</p>
                <p>Максимальная температура: {weatherData.main.temp_max}°</p>
                <p>Минимальная температура: {weatherData.main.temp_min}°</p>
                <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
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