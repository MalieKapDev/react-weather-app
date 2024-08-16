import React, { useState, useEffect } from "react";

export default function ClothingSuggestions({
  temperature,
  uv,
  wind,
  humidity,
  description,
}) {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const message = getWeatherAdvice(
      temperature,
      uv,
      wind,
      humidity,
      description
    );
    setAdvice(message);
  }, [temperature, uv, wind, humidity, description]);

  return <div>{advice}</div>;
}

const getWeatherAdvice = (temperature, uv, wind, humidity, description) => {
  let message = "";

  // Temperature conditions
  if (temperature <= 18) {
    message +=
      "Today will be cold, you should bundle up with extra layers to keep warm";
  } else if (temperature > 18 && temperature <= 22) {
    message +=
      "Today will be chilly, you should wear a jacket, shirt, and some long pants";
  } else if (temperature > 22 && temperature < 27) {
    message +=
      "Today will be warm, you will be fine in a shirt with pants or shorts";
  } else if (temperature >= 27) {
    message +=
      "Today will be very hot, you don't want to overheat so wear a t-shirt";
  }

  // UV conditions
  if (temperature >= 25) {
    message +=
      ". It will also be sunny so remember to grab your shades and wear sunscreen";
  }

  // Wind conditions
  if (wind >= 25) {
    message += ". It will be breezy today, so don't forget to grab a coat";
  } else if (wind <= 5) {
    message += ". It will not be too windy today";
  }

  // Precipitation or humidity based on description
  const lowerCaseDescription = description.toLowerCase();
  const rainKeywords = [
    "rain",
    "showers",
    "shower",
    "shower-rain",
    "drizzle",
    "thunderstorm",
    "snow",
  ];

  if (lowerCaseDescription.includes("clear sky")) {
    message += "";
  } else {
    const hasRain = rainKeywords.some((keyword) =>
      lowerCaseDescription.includes(keyword)
    );

    if (hasRain || humidity >= 70) {
      message +=
        ", there is a high chance of rain today so remember to put on a raincoat and bring your umbrella.";
    } else if (humidity > 30 && humidity < 70) {
      message += ", and it will most likely not rain today.";
    }
  }

  return message;
};
