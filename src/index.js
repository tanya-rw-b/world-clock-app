function updateTime() {
  // Los Angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    // alternative way: let losAngelesDate = document.querySelector("#los-angeles .date");
    let losAngelesDate = losAngelesElement.querySelector(".date");
    losAngelesDate.innerHTML = moment
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    let losAngelesTemporaryTime = moment
      .tz("America/Los_Angeles")
      .format("h:mm:ss");
    let losAngelesTemporaryAmPm = moment.tz("America/Los_Angeles").format("A");

    let losAngelesTime = losAngelesElement.querySelector(".time");
    losAngelesTime.innerHTML = `${losAngelesTemporaryTime}<small> ${losAngelesTemporaryAmPm}</small>`;
  }
  // Sydney

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");

    sydneyDateElement.innerHTML = moment
      .tz("Australia/Sydney")
      .format("MMMM Do YYYY");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // let sydneyTemporaryTime = moment.tz("Australia/Sydney").format("hh:mm:ss");
  // let sydneyTemporaryAmPm = moment.tz("Australia/Sydney").format("A");

  // let sydneyTime = sydneyElement.querySelector(".time");
  // sydneyTime.innerHTML = `${sydneyTemporaryTime}<small> ${sydneyTemporaryAmPm}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div class="city-date">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);
