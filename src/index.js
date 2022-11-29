function displayTemperature(response) {
  console.log(response.data.temperature.current);
}

let apiKey = "777of6aa4d00083100225cb6ff7437te";

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Glasgow&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
