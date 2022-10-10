const APIKey = "67e07ebfc7be74885d77376a79a4a255";
// let cityInput = document.getElementById('#cityInput')
let cityInput = $('#cityInput')
let nameOfCity = $('#cityName')
const date = new Date();
var listOfCities = $('#listOfCities')

function kelvinToFahrenheit(temp) {
    let fahrenheit = (temp-273.15) * 9/5 + 32;
    return Math.floor(fahrenheit) + "˚F";
}
// adds MPH to wind
    function addMPH (wind) {
        return wind + "mph";
    }

// adds a percent sign to humidity
function addPercentage (humidity) {
    return humidity + "%";
}

function searchCity(){
    let chosenCity = cityInput.val()
    let weatherSearch = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${APIKey}`;
    fetch(weatherSearch)
    .then((response) => {return response.json()})
    .then((data) => {
        console.log('data',data)
        let cityName = data.name;
        let div = $('<div>')
        nameOfCity.append(div);
        div.append(cityName);
        nameOfCity.append(date);
        

        // Dallas at end of time
        // let listOfCities = data.name;
        // let el = $('<el>')
        // nameOfCity.append(el);
        // el.append(listOfCities);

        


        // Converts from lat/lon to city
        let latitude = data.coord.lat
        let longitude = data.coord.lon
        searchForecast(latitude, longitude)
        
        // logs current Temp
        let currentTemp = kelvinToFahrenheit(data.main.temp);
        $('#tempEl').append(currentTemp);

        // logs current windSpeed
        let currentWind = addMPH(data.wind.speed);
        $('#windEl').append(currentWind);

        // logs current humidity
        let currentHumidity = addPercentage(data.main.humidity);
        $('#humidityEl').append(currentHumidity);
    })
    
}

function searchForecast(latitude, longitude){
    let weatherSearchForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKey}`;
    
    fetch(weatherSearchForecast)
    .then((response) => {return response.json()})
    .then((res) => {
        console.log('res',res)
    
    // Day One
        let dayOneDate =  new Date()
        dayOneDate.setDate(date.getDate() + 1);
        $('#dayOneDate').append(dayOneDate);

        let dayOneTemp = kelvinToFahrenheit(res.list[4].main.temp);
        $('#dayOneTemp').append(dayOneTemp);

        let dayOneWind = addMPH(res.list[4].wind.speed);
        $('#dayOneWind').append(dayOneWind);

        let dayOneHumidity = addPercentage(res.list[4].main.humidity);
        $('#dayOneHumidity').append(dayOneHumidity);

    // Day Two
        let dayTwoDate =  new Date()
        dayTwoDate.setDate(date.getDate() + 2);
        $('#dayTwoDate').append(dayTwoDate);

        let dayTwoTemp = kelvinToFahrenheit(res.list[12].main.temp);
        $('#dayTwoTemp').append(dayTwoTemp);

        let dayTwoWind = addMPH(res.list[12].wind.speed);
        $('#dayTwoWind').append(dayTwoWind);

        let dayTwoHumidity = addPercentage(res.list[12].main.humidity);
        $('#dayTwoHumidity').append(dayTwoHumidity);
       

     // Day Three
        let dayThreeDate =  new Date()
        dayThreeDate.setDate(date.getDate() + 3);
        $('#dayThreeDate').append(dayThreeDate);

        let dayThreeTemp = kelvinToFahrenheit(res.list[20].main.temp);
        $('#dayThreeTemp').append(dayThreeTemp);

        let dayThreeWind = addMPH(res.list[20].wind.speed);
        $('#dayThreeWind').append(dayThreeWind);

        let dayThreeHumidity = addPercentage(res.list[20].main.humidity);
        $('#dayThreeHumidity').append(dayThreeHumidity);

    // Day Four
        let dayFourDate =  new Date()
        dayFourDate.setDate(date.getDate() + 4);
        $('#dayFourDate').append(dayFourDate);

        let dayFourTemp = kelvinToFahrenheit(res.list[28].main.temp);
        $('#dayFourTemp').append(dayFourTemp);

        let dayFourWind = addMPH(res.list[28].wind.speed);
        $('#dayFourWind').append(dayFourWind);

        let dayFourHumidity = addPercentage(res.list[28].main.humidity);
        $('#dayFourHumidity').append(dayFourHumidity);

    // Day Five
        let dayFiveDate =  new Date()
        dayFiveDate.setDate(date.getDate() + 5);
        $('#dayFiveDate').append(dayFiveDate);

        let dayFiveTemp = kelvinToFahrenheit(res.list[36].main.temp);
        $('#dayFiveTemp').append(dayFiveTemp);

        let dayFiveWind = addMPH(res.list[36].wind.speed);
        $('#dayFiveWind').append(dayFiveWind);

        let dayFiveHumidity = addPercentage(res.list[36].main.humidity);
        $('#dayFiveHumidity').append(dayFiveHumidity);
})
}