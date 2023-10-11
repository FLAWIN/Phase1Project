
document.addEventListener("DOMContentLoaded", () => {  //DOMcontentloaded

  const input = document.querySelector("#input");
  const city = document.querySelector("#city");
  const cityName = document.querySelector("#cityName"); 
  const Temp = document.querySelector("#temp");
  const main = document.querySelector("#main");
  const description = document.querySelector("#description");
  const image = document.querySelector("#image");

  input.onsubmit = (e) => { //submit
    e.preventDefault();  //Prevent the form from submitting without data
    weatherUpdate(city.value);
    city.value = "";
  };

  weatherUpdate = (city) => { //fetching API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33cff31f39d06f1c2d11b29103803865` //API KEY
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let status;
        if (status === 404) {
          alert("Place not found");
        } else {
          cityName.innerHTML = data.name;
          Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;  //Calculate temperature in degree celcius
          main.innerHTML = data.weather[0].main;
          description.innerHTML = data.weather[0].description;
          image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        }
      });
  };
  weatherUpdate("Nairobi");
});
