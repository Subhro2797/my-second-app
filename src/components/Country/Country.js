import React from 'react';
import './Country.css'

const Country = (props) => {
    const { area, population, region, name, flags } = props.country;
    return (
        <div className='country'>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h5><small>Region:{region}</small></h5>
            <p>Area:{area}</p>
        </div>
    );
};

export default Country;