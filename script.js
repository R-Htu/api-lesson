const apiKey = "1578e576a667fd90e6dbce9f2e49ba0e";
const cityPromise = "Yangon";
const cityAsync = "London";

// ✅ Using Promise
function getWeatherWithPromise(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("weather-promise").innerHTML =
        `<strong>${data.name}</strong>: ${data.weather[0].main}, ${data.main.temp}°C`;
    })
    .catch(err => {
      document.getElementById("weather-promise").innerText = "Error loading weather data.";
    });
}
getWeatherWithPromise(cityPromise);

// ✅ Using Async/Await
async function getWeatherWithAsync(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("weather-async").innerHTML =
      `<strong>${data.name}</strong>: ${data.weather[0].main}, ${data.main.temp}°C`;
  } catch (error) {
    document.getElementById("weather-async").innerText = "Error loading weather data.";
  }
}
getWeatherWithAsync(cityAsync);

// ✅ Input-based weather check
async function getWeatherByCity() {
  const city = document.getElementById("cityInput").value.trim();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weather-custom").innerText = "City not found.";
      return;
    }

    document.getElementById("weather-custom").innerHTML =
      `<strong>${data.name}</strong>: ${data.weather[0].main}, ${data.main.temp}°C`;
  } catch (error) {
    document.getElementById("weather-custom").innerText = "Error getting weather.";
  }
}





/*const API_KEY = "1578e576a667fd90e6dbce9f2e49ba0e";
const city = "Yangon";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// 🔸 Using Promise
fetch(url)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp;
    const condition = data.weather[0].description;
    document.getElementById("weather-promise").innerText = `🌡 ${temp}°C, ${condition}`;
  })
  .catch(error => {
    document.getElementById("weather-promise").innerText = "❌ Error loading weather";
    console.error("Promise Error:", error);
  });

// 🔹 Using Async/Await
async function getWeatherAsync() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const temp = data.main.temp;
    const condition = data.weather[0].description;
    document.getElementById("weather-async").innerText = `🌡 ${temp}°C, ${condition}`;
  } catch (error) {
    document.getElementById("weather-async").innerText = "❌ Error loading weather";
    console.error("Async Error:", error);
  }
}

getWeatherAsync();
*/