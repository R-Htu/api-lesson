const API_KEY = "1578e576a667fd90e6dbce9f2e49ba0e";
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
