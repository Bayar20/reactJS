import React, { useState } from 'react';
import axios from 'axios';
// import showWeather from './showWeather'
import './App.css'

const Weather = () => {
  const nameEl = React.useRef(null);
  const [location, setLocation] = useState([]);
  const [temp, setTemp] = useState('');
  const [precip, setPrecip] = useState('')
  const [humidity, setHumidity] = useState('')

  const Search = async (city) => {
    setTemp('');
    setHumidity('');
    setPrecip('')
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?limit=3&access_token=pk.eyJ1IjoiYmFhdGFydmFuIiwiYSI6ImNrbXd4dTRhbjAzNXQycnFrOWs2M2JndWgifQ.yQcbjJNnNZ_Fp-MfsnB4VQ`
      );
      let locations = response.data.features;
      setLocation(locations)
    } catch (error) {
      console.log(error.message);
    }
  };

  const showWeather = (lat, long) => axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${lat},${long}`)
  .then(function (response) {
    // handle success
    let calcCelsius = (input) => {
        return Math.round((input - 32) * 5 / 9 * 100) / 100
    } 
    let temp = `${calcCelsius(response.data.currently.temperature)}^C`;
    let precip = response.data.currently.precipProbability;
    let humidity = response.data.currently.humidity * 100;

    setPrecip(precip);
    setTemp(temp);
    setHumidity(humidity)

  })
  .catch(function (error) {
    // handle error
    console.log('DarkSky руу хүсэлт явуулахад алдаа гарлаа');
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameEl.current.value);
    Search(nameEl.current.value);
    nameEl.current.value = ''
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' ref={nameEl} placeholder='Search city' className="row" />
        </label>
        <input type='submit' name='Submit' className='row'/>
      </form>
      <p>
          {location.map((item, index) => (
            <p key = {index}>
              {console.log('lat:', item['center'][1], 'long: ', item['center'][0])}
              <button onClick={() => showWeather (item['center'][1], item['center'][0])}>  
                {index + 1}: {item['place_name']}
              </button>
              <br />
            </p>
          ))}
      </p>

        Temperature: {temp} <br />
        Precipitation: {precip} <br />
        Humidity: {humidity} %
                
    </div>
  );
};



export default Weather;