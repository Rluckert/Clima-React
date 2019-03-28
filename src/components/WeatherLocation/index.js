import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import transformWeather from './../../services/transformWeather';
//import { api_weather } from '../../constans/api_url';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
        //console.log("constructor");
    }

    componentDidMount() {
        //console.log("componentDidMount");
        this.handleUpdateClick();

    }


    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate");
    }

    /*
    componentWillMount() {
        //No se debe renderizar aquí
        console.log("UNSAFE componentWillMount");

    }



    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
        
    }
    */
     

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather)
            .then(res => res.json())
            .then(data => {
                const newWeather = transformWeather(data);
                this.setState({
                    data: newWeather,
                });
            });

    }

    render() {
        const { city, data } = this.state
        const { onWeatherLocationClick } = this.props;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? 
                <WeatherData data={data}></WeatherData>:
                <CircularProgress size={50}/>}
            </div>

        );

    }

}


WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;