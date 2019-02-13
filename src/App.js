import React, { Component } from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '2217cc15eb6a554f45cad29e907a78f5';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity:undefined,
    description: undefined,
    error: undefined
  }  

  getWeather = async (e) => {
        //prevent default from submiting and refreshing the whole page
        //is important for a single page app
        e.preventDefault();
        //access the value from the input form  
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        //const api_call with a func that makes a call to this url
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        //conver responce from API to json
        const data = await api_call.json();
        // check if a user press the button without entering city and country
        if (city && country){
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity:undefined,
                description: undefined,
                error: "Please, enter the values."
            });
        }
  }  

  render() {
    return (
      <div>
        <div className="wrapper">
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-5 title-container">
                            <Titles />
                        </div>
                        <div className="col-xs-7 form-container">
                            <Form getWeather={this.getWeather}/>
                                {
                                // we define all the props, so we have access to this.props in Weather.js
                                }
                                <Weather 
                                    temperature={this.state.temperature}
                                    city={this.state.city}
                                    country={this.state.country}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    error={this.state.error}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App;



        