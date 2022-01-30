import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayWeather(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiKey = `ae55b2734c25897ad68408d12d0a5fb9`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  return <h2>Hello from weather</h2>;
}
