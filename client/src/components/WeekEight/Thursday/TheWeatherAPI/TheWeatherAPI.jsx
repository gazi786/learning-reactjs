import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import WeatherDisplay from "./WeatherElements/TheWeatherDisplay";

const TheWeatherAPI = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [cityName, setCityName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const submitCity = (e) => {
    e.preventDefault();
    if (cityName.trim() !== "") {
      fetchWeather();
    } else {
      alert("Please enter a city name");
    }
  };

  const fetchWeather = async () => {
    let response;
    try {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1d2bfc8b390e7da163843e07f08dc678&units=metric`
      );
      if (response.ok) {
        const weatherData = await response.json();
        setWeatherInfo(weatherData);
        setHasError(false);
      } else {
        console.log(response.statusText);
        setHasError(true);
        setErrorMessage(`${response.statusText}`);
      }
    } catch (error) {
      console.log(response.statusText);
      setHasError(true);
      setErrorMessage(`${error}`);
    }
  };

  return (
    <Box
      sx={{
        pt: 3,
      }}
    >
      <Container>
        <Box>
          <Typography variant="h6" component="h6" margin={2}>
            The Weather API
          </Typography>
          <Typography variant="p" component="p" mb={2} ml={2}>
            The Weather API is a free service that provides weather data.
          </Typography>
        </Box>
        <Box
          sx={{
            border: "solid",
            borderColor: "primary.main",
            borderRadius: "1rem",
            padding: "1rem",
            borderWidth: "1px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="h6" margin={2}>
            Fetching Weather Data for Different Cities
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            noValidate
            autoComplete="off"
            onSubmit={submitCity}
          >
            <TextField
              required
              id="outlined-required"
              label="Required"
              placeholder="Enter City Name"
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              Submit City
            </Button>
          </Box>

          <Box sx={{ mt: 3 }}>
            <WeatherDisplay
              weatherData={weatherInfo}
              hasError={hasError}
              errorMessage={errorMessage}
              cityName={cityName}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default TheWeatherAPI;
