// let key = "936e5a71a8798b1d83f869ab93f77109"
const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");
const cityRef = document.getElementById("city");

//function to fetch details
let getWeather = () => {
  let citValue = cityRef.value;
  //check if input is empty
  if (citValue.length === 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${citValue}&appid=${key}`;
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${(data.main.temp / 10).toFixed(2)} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${(data.main.temp_min / 10).toFixed(2)}</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${(data.main.temp_max / 10).toFixed(2)}</h4>
            </div>
        </div>`;
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};

searchBtn.addEventListener("click", getWeather);

window.addEventListener("load", getWeather);
