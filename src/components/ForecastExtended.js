import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]

class ForestExtended extends Component {
    renderForecastItemDays() {
        return days.map(day => 
            (<ForecastItem weekDay={day} hour={10}></ForecastItem>)
        );
    }

    render() {
        const { city } = this.props;
        return (
            <div>
                <h2 className='forescast-title'>Pronóstico extendido para {city}</h2>
                {this.renderForecastItemDays()}
            </div>

        );
    }
}

ForestExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForestExtended;