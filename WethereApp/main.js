const apiKey = "bec34781e0c88f144953643647591259";
const weatherData = document.getElementById("weather-data");
const cityInput = document.getElementById("city-input");
const formEle = document.querySelector("form");
// Add event For the form sumbimt
formEle.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInput.value;
  getWeatherData(cityValue);
});
// this one is for fetching the data fro the api
async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like : ${Math.round(data.main.feels_like)}°C`,
      `Humidity :${data.main.humidity}%`,
      `Wind Speed : ${data.wind.speed}m/s`,
    ];
    weatherData.querySelector(".icon").innerHTML = `<img
    src="http://openweathermap.org/img/wn/${icon}.png"
    alt="Weather Icon"
  />`;
  //selecting the the div inside the weather data and fill them with the data from the previous step
    weatherData.querySelector(".temprature").textContent = `${temperature}°C`;
    weatherData.querySelector(".description").textContent = description;
    weatherData.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherData.querySelector(".icon").innerHTML = "";
    weatherData.querySelector(".temprature").textContent = "";
    weatherData.querySelector(".description").textContent =
      " An error Happing pleas , Check the city You enter Or Try Again Later";
    weatherData.querySelector(".details").innerHTML = "";
  }
  
}
