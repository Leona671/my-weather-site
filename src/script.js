let now = new Date();
let date = now.getDate();
let time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sunday",
];
let day = days[now.getDay()];
let months = [
  "january",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let curDate = document.querySelector("div.curDate");
curDate.innerHTML = ` ${day} ${month} ${date}, ${year} ${time}`;

function showWeather(response) {
  document.querySelector("#curPlace").innerHTML = response.data.name;
  document.querySelector("#curTemp").innerHTML = `${Math.round(
    response.data.main.temp
  )}° F`;
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  let apiKey = "3cf67e2364f74bd0e36b75c947252e39";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showPos(position) {
  document.querySelector(
    "#curPlace"
  ).innerHTML = `${position.coords.latitude} latitude and ${position.coords.longitude} longitude`;
}
function showTemp(response) {
  navigator.geolocation.getCurrentPosition(showPos);
  document.querySelector("#curTemp").innerHTML = `${Math.round(
    response.data.main.temp
  )}° F`;
}
function curSearch(event) {
  event.preventDefault();
  let apiKey = "3cf67e2364f74bd0e36b75c947252e39";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=imperial";
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

let formCur = document.querySelector("#local");
formCur.addEventListener("click", curSearch);
