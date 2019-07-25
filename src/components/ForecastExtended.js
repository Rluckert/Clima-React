import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import { transformForecast } from './../services/transformWeather';
import WeatherData from './WeatherLocation/WeatherData';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'

}
*/

const api_key = "fe50829122fadaa42a7f14d538eaf322";
const url_base = "https://api.openweathermap.org/data/2.5/forecast";

class ForestExtended extends Component {
    constructor(){
        super();
        this.state = {
          forescastData: null
        }
    }

    componentDidMount(){
      this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){ //Se utiliza cuando cambian las props, (actualizar componentes)
      if(nextProps.city !== this.props.city){
          this.setState({forescastData: null});
          this.updateCity(nextProps.city);
      }
    }

    updateCity = city => {
        const url_forecast = `${url_base}?q=${city}&units=metric&appid=${api_key}`;
        fetch(url_forecast).then(
            data => data.json()
        ).then(
           weather_data => {
               console.log(weather_data)
               const forescastData = transformForecast(weather_data);
               console.log(forescastData);
               this.setState({ forescastData });
           }
        ) 
    }

    renderForecastItemDays = (forescastData) => {
        return forescastData.map((forecast, key) => 
        (<ForecastItem key={key} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>) );
    }
    
    renderProgress = () => {
        return <h3>Cargando Pronóstico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forescastData } = this.state;
        return (
            <div>
                <h2 className='forescast-title'>Pronóstico extendido para {city}</h2>
                {forescastData ? 
                this.renderForecastItemDays(forescastData) :
                this.renderProgress()}
            </div>

        );
    }
}

ForestExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForestExtended;