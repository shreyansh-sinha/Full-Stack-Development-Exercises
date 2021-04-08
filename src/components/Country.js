import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {isEmpty} from 'lodash'

const Country = ({countryFound}) => {

	const [weather, setWeather] = useState([])
	// console.log(countryFound)
	const url = (countryFound[0].flag)

	const flagStyle = {
    	width : "180px"
	}

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          countryFound[0].capital
        }&appid=40c733ecd537be7e11b333e13f0181bc`
      )
      .then(response => {
      	console.log(response)
        setWeather(response.data);
      });
  }, [])
	// console.log(url)



	return (
			<div>
				<h1> {countryFound[0].name} </h1>
		      	<div>Capital: {countryFound[0].capital}</div>
		      	<div>Population: {countryFound[0].population}</div>
		      	<h3>Languages</h3>
		      	<ul>
		      		{countryFound[0].languages.map((language, i) => (
		      			<li key = {i}> {language.name} </li>
		      		))}
		      	</ul>
		      	<img src={url} alt = "" style = {flagStyle}/>
		      	<h3>Weather in {countryFound[0].capital}</h3>
		      	
		      	{!isEmpty(weather) && (
        <>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} Celsius</p>
          <img
            alt="generalWeather"
            src={`http://openweathermap.org/img/w/${
              weather.weather[0].icon
            }.png`}
          />
          <p>Wind: {(weather.wind.speed * 1.609)}km/h</p>
        </>
      )}
			</div>
		)
}

export default Country;

