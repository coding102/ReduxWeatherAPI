// http://openweathermap.org/forecast5
// npm install --save axios ajax request
import axios from 'axios';

const API_KEY= "9ec9f24d36960b618105e52eab4ddc0f";
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Actions have to have "type"
export function fetchWeather(city) {
     // http://openweathermap.org/forecast5
     const url = `${ROOT_URL}&q=${city}, us`;
     const request = axios.get(url);
          
     return {
          type: 'FETCH_WEATHER',
          payload: request
     };
}