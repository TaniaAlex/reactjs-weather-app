import React from 'react';

//stateless functional component do not need to be class-based and can be written like that:
//And than need to use props as a func argument and just "props.city"... instead of "this.props.city"...

const Weather = props => (
        <div className="weather__info">
            {
            //if this.props.temperature/city/country ... exists, than render that to paragraf..
            }
          {
            props.city && props.country && <p className="weather__key">Location: 
              <span className="weather__value"> {props.city}, {props.country}</span>
              </p>
            }
          {
            props.temperature && <p className="weather__key"> Temperature: 
            <span className="weather__value"> {props.temperature}</span>
            </p>
            }
          {
            props.humidity && <p className="weather__key">Humidity: 
            <span className="weather__value"> {props.humidity}</span>
            </p>
            }
          {
            props.description && <p className="weather__key">Conditions: 
            <span className="weather__value"> {props.description}</span>
            </p>
            }
          {
            props.error && <p className="weather__error">{props.error}</p>
            }
  
        </div>
      )


export default Weather;