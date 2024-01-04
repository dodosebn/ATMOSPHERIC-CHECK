const tempCont = document.querySelector('.temp');
const cityCont = document.querySelector('.city');
const humidityCont = document.querySelector('.humidity');
const windCont = document.querySelector('.wind');
const cityName = document.querySelector('.search input');
const cityBtn = document.querySelector('.search button');
const Back = document.querySelector(".fa-arrow-left");

Back.addEventListener("click", function(){
window.location.href = "./index.html";
});

const apiKey = "6019191a34ed2ea0f8cdebd1758597ea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


async function checkWeather() {
  const city = cityName.value.trim();
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiEndpoint = `${apiUrl}&q=${encodeURIComponent(city)}&appid=${apiKey}`;
  const response = await fetch(apiEndpoint);
  const data = await response.json();

  if (response.ok) {
    const temperature = Math.round(data.main.temp);
    if (temperature > 25) {
      displaySentences(sunny, data);
    } else if (temperature < 15) {
      displaySentences(rainy, data);
    } else {
      displaySentences(None, data);
    }
  } else {
    alert(`Error: ${data.message}`);
  }
}

function displaySentences(sentences, data) {
  let index = 0;
  const interval = setInterval(() => {
    if (index >= sentences.length) {
      clearInterval(interval);
      return;
    }

    tempCont.innerHTML = Math.round(data.main.temp) + '°C';
    humidityCont.innerHTML = data.main.humidity + '%';
    cityCont.innerHTML = data.name;
    windCont.innerHTML = Math.round(data.wind.speed) + ' m/s';

    console.log(sentences[index]);

    index++;
  }, 2000);
}

cityBtn.addEventListener("click", checkWeather);