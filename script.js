const APIKey = "67e07ebfc7be74885d77376a79a4a255";
// let cityInput = document.getElementById('#cityInput')
let cityInput = $('#cityInput')
let nameOfCity = $('#cityName')


function searchCity(){
    let chosenCity = cityInput.val()
    let weatherSearch = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${APIKey}`;
    fetch(weatherSearch)
    .then((response) => {return response.json()})
    .then((data) => {
        console.log('data',data)
        let cityName = data.name;
        let div = $('<div>')
        nameOfCity.append(div);c
        div.append(cityName);

        let latitude = data.coord.lat
        let longitude = data.coord.lon
        searchForecast(latitude, longitude)
        
    })
    
    
}

function searchForecast(latitude, longitude){
    let weatherSearchForecast = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKey}`;
    
    fetch(weatherSearchForecast)
    .then((response) => {return response.json()})
    .then((res) => {
        console.log('res',res)
    })

}
//   if (response.status === 200) {
//     responseText.textContent = response.status;
//   }
//   return response.json();