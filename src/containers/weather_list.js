import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

// rendering a single city aka "row"
class WeatherList extends Component {
     renderWeather(cityData) {
          const name = cityData.city.name;
          const temps = cityData.list.map(weather => weather.main.temp);
          console.log(temps);
          const pressures = cityData.list.map(weather => weather.main.pressure);
          const humidities = cityData.list.map(weather => weather.main.humidity);

          return (
               <tr key={name}>
                    <td>{name}</td>
                    <td><Chart data={temps} color="blue" /></td>
                    <td><Chart data={pressures} color="green" /></td>
                    <td><Chart data={humidities} color="red" /></td>
               </tr>
          );
     }
     
     render() {
          return (
               <table className="table table-hover">
                    <thead>
                         <tr>
                              <th>City</th>
                              <th>Temperature</th>
                              <th>Pressure</th>
                              <th>Humidity</th>
                         </tr>      
                    </thead>
                    
                    <tbody>
                         {this.props.weather.map(this.renderWeather)}
                    </tbody>
               </table>
          );
     }
}

function mapStateToProps({ weather }) {
     return { weather }; // = { weather : weather };
}

export default connect(mapStateToProps)(WeatherList);