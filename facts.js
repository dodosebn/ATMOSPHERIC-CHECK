const Back = document.querySelector(".fa-arrow-left");

Back.addEventListener("click", function () {
  window.location.href = "./index.html";
});
  
  const weatherFacts = [
      "The Earth's atmosphere is made up of several layers: troposphere, stratosphere, mesosphere, thermosphere, and exosphere.",
      "The troposphere is the lowest layer of the atmosphere and is where weather events occur.",
      "Weather is the state of the atmosphere at a particular place and time, including temperature, humidity, wind, and precipitation.",
      "The most common unit for measuring temperature is Celsius (°C), although Fahrenheit (°F) is also used in some countries.",
      "The highest temperature ever recorded on Earth was 56.7°C (134°F) in Death Valley, California, USA.",
      "The lowest temperature ever recorded on Earth was -89.2°C (-128.6°F) in Vostok Station, Antarctica.",
      "Rain, snow, sleet, and hail are all forms of precipitation that occur due to the condensation of atmospheric water vapor.",
      "Lightning is an electrical discharge caused by the buildup of static electricity in the atmosphere during thunderstorms.",
      "Tornadoes are powerful, rotating columns of air that are formed from severe thunderstorms and can cause significant damage.",
      "Climate refers to the long-term patterns of weather conditions in a particular area, including average temperature and precipitation.",
      "El Niño and La Niña are climate patterns that result from the interaction between the ocean and the atmosphere in the tropical Pacific region.",
      "Weather forecasting uses scientific data and models to predict future weather conditions, helping us plan our activities and stay safe."
    ];
    
    // Create the list items for weather facts
    const factsList = document.getElementById("factsList");
    weatherFacts.forEach(function(fact) {
      const li = document.createElement("li");
      li.textContent = fact;
      factsList.appendChild(li);
    });
