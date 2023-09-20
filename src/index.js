function updateTime() {
  // Los Angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  // alternative way: let losAngelesDate = document.querySelector("#los-angeles .date");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  losAngelesDate.innerHTML = moment
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  let losAngelesTemporaryTime = moment
    .tz("America/Los_Angeles")
    .format("hh:mm:ss");
  let losAngelesTemporaryAmPm = moment.tz("America/Los_Angeles").format("A");

  let losAngelesTime = losAngelesElement.querySelector(".time");
  losAngelesTime.innerHTML = `${losAngelesTemporaryTime}<small> ${losAngelesTemporaryAmPm}</small>`;

  // Sydney

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");

  sydneyDateElement.innerHTML = moment
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // let sydneyTemporaryTime = moment.tz("Australia/Sydney").format("hh:mm:ss");
  // let sydneyTemporaryAmPm = moment.tz("Australia/Sydney").format("A");

  // let sydneyTime = sydneyElement.querySelector(".time");
  // sydneyTime.innerHTML = `${sydneyTemporaryTime}<small> ${sydneyTemporaryAmPm}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment.tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = "Please eat more chocolate";
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);
