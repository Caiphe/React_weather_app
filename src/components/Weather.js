import React from 'react'
import rainy from '../img/rainy.svg'
import temperature from '../img/temperature.svg'
import warm from '../img/warm.svg'
import sunset from '../img/sunset.svg'
import acid_rain from '../img/acid_rain.svg'
import ozonelayer from '../img/ozonelayer.svg'
import cloudy from '../img/cloudy.svg'
import flood from '../img/flood.svg'
import location from '../img/location.svg'


const Weather = props => (
    <div className="weather__info">
        <div className="main_weather_container">
            {
                props.city && props.country &&
                <div className="weather_details">
                    <p className="main_weather_title">Location </p>
                    <img src={location} className="weather_icons" alt="" />
                    <p class="weather_v">{props.city}, {props.country}</p>
                </div>
            }

            {
                props.temperature &&
                <div className="weather_details">
                    <p className="main_weather_title">Temperature  </p>
                    <img src={temperature} className="weather_icons" alt="" />
                    <p class="weather_v">{props.temperature}</p>
                </div>
            }

            {
                props.humidity &&
                <div className="weather_details">
                    <p className="main_weather_title">Humidity </p>
                    <img src={acid_rain} className="weather_icons" alt="" />
                    <p class="weather_v">{props.humidity}</p>
                </div>
            }
        </div>

        {/* Second Section  */}

        <div className="main_weather_container">
            {
                props.description &&
                <div className="weather_details">
                    <p className="main_weather_title"> Description  </p>
                    <img src={flood} className="weather_icons" alt="" />
                    <p class="weather_v">{props.description}</p>
                </div>
            }

            {
                props.pressure &&
                <div className="weather_details">
                    <p className="main_weather_title">Pressure </p>
                    <img src={warm} className="weather_icons" alt="" />
                    <p class="weather_v">{props.pressure}</p>
                </div>
            }

            {
                props.visibility &&
                <div className="weather_details">
                    <p className="main_weather_title">Visibility :</p>
                    <img src={cloudy} className="weather_icons" alt="" />
                    <p class="weather_v">{props.visibility}</p>
                </div>
            }
        </div>

        {/* Third Section  */}

        <div className="main_weather_container">
            {
                props.degree &&
                <div className="weather_details">
                    <p className="main_weather_title"> Degree  </p>
                    <img src={ozonelayer} className="weather_icons" alt="" />
                    <p class="weather_v">{props.degree}</p>
                </div>
            }

            {
                props.pressure &&
                <div className="weather_details">
                    <p className="main_weather_title">Pressure </p>
                    <img src={warm} className="weather_icons" alt="" />
                    <p class="weather_v">{props.pressure}</p>
                </div>
            }

            {
                props.visibility &&
                <div className="weather_details">
                    <p className="main_weather_title">Visibility :</p>
                    <img src={acid_rain} className="weather_icons" alt="" />
                    <p class="weather_v">{props.visibility}</p>
                </div>
            }
        </div>

        {
            props.error && <p className="weather__error">{props.error}</p>
        }
    </div>
)

export default Weather;
