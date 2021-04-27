import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://api.weatherstack.com/current";

const params = {
  access_key: process.env.REACT_APP_WEATHER_API,
  query: "Helsinki",
};

const Weather = () => {
  const [weather, setweather] = useState({});
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    axios.get(API, { params }).then((resp) => setweather(resp.data));
  }, []);

  return (
    <div>
      <p>
        {""} Weather will be here
        {/* Currently, in {weather.location.name} is {weather.current.temperature}{" "}
        degrees, it feels like {weather.current.feelslike} */}
      </p>
    </div>
  );
};

export default Weather;
