import React from 'react';
import PropTypes from 'prop-types';

const ForecastItem = ({weekDay, hour}) => (
    <div>{weekDay} Hora: {hour} hs</div>
)

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
}

export default ForecastItem;