import React, { Component } from 'react'
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Loader from 'react-loader-advanced';

const API_KEY = '0ef8d731fb13ad93e84535108e3de99f';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    pressure: undefined,
    degree: undefined,
    visibility: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country) {
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        pressure: data.main.pressure,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        degree: data.wind.deg,
        visibility: data.visibility,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        pressure: undefined,
        degree: undefined,
        visibility: undefined,
        error: "Please Enter City and Country",
      })
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

                  <Loader show={false} message="loading...">
                    <Form getWeather={this.getWeather} />
                  </Loader>
                  {/* micp */}

                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    pressure={this.state.pressure}
                    degree={this.state.degree}
                    visibility={this.state.visibility}
                    error={this.state.error}
                  />
                  <Footer />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

