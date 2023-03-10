import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const WeatherDisplay = ({ weatherData, hasError, errorMessage, cityName }) => {
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (!hasError && weatherData && Object.keys(weatherData).length > 0) {
      setShowData(true);
    } else {
      const timer = setTimeout(() => {
        setShowData(false);
      }, 1000); // set delay for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [weatherData, hasError]);

  if (!showData) {
    if (hasError) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "solid",
            backgroundColor: "#1f28336a",
            color: "white",
            borderRadius: "1rem",
            padding: "1rem",
            lineHeight: "2rem",
          }}
        >
          <Typography
            variant="subtitle1"
            mb={1}
            sx={{ color: "white", textShadow: "1px 1px 2px red" }}
          >
            Error: {cityName.toUpperCase()} is not a valid city name.{" "}
            {cityName.toUpperCase()} - {errorMessage}
          </Typography>
        </Box>
      );
    } else {
      if (errorMessage === "" || errorMessage === undefined) {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "solid",
              backgroundColor: "#1F2833",
              color: "white",
              borderRadius: "1rem",
              padding: "1rem",
              lineHeight: "2rem",
            }}
          >
            <Typography variant="subtitle1" mb={1}>
              No data available. Please enter a city name and click on the
              button..!!!
            </Typography>
          </Box>
        );
      }
    }
  } else {
    const { name, sys, main, weather, wind } = weatherData;
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "solid",
          backgroundColor: "#1F2833",
          color: "white",
          borderRadius: "1rem",
          padding: "1rem",
          lineHeight: "2rem",
        }}
      >
        {weatherData && (
          <>
            <Typography
              variant="h4"
              component="h2"
              style={{ color: "#FF5733" }}
            >
              {name}
            </Typography>
            <Typography
              variant="em"
              component="em"
              style={{ fontSize: "12px", color: "aqua" }}
            >
              {sys.country}
            </Typography>
            <Typography variant="p">
              The temperature is: {main.temp}&#176;C, but feels like{" "}
              {main.feels_like}
              &#176;C
            </Typography>
            <Typography variant="p">
              Humidity is at: {main.humidity}%
            </Typography>
            {weather.map((w, index) => (
              <Box className="col-md-12 text-center" key={index}>
                <Typography variant="p">
                  Weather looks like: {w.main} in the horizon. It's{" "}
                  {w.description}
                </Typography>
              </Box>
            ))}
            <Box className="col-md-12 text-center">
              <Typography variant="p">
                The wind is blowing at: {wind.speed} kM/h... Will it blow you
                away...???
              </Typography>
            </Box>
          </>
        )}
      </Box>
    );
  }
};

export default WeatherDisplay;
