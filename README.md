# Five-Day-Weather-Forecast

## Description

This project was the 5th project completed during my coding bootcamp at the University of Texas at Austin. The point of the project was to use the concepts already reviewed in class: javascript, CSS, HTML, and third party APIs. The goal of the challenge was to use a weather forecast API in order to pull temperature, wind, humidity, and potential forecasts in any given city. This challenge deploys a similar structure that the weather app on an iphone uses. The weather app pulls from an API that collects data from weather stations across the globe. This makes it so that Apple's weather app doesn't actually have to maintain all of those weather stations, but rather just pulls the data.

To complete the project, I first built out the search bar. The weather API pulls data based off of latitude and logitude. However, to make things user friendly, I had to write a function that converted user input to latitude and longitude. I used a geolocation API to accomplish this task. Next, I had to sort through the large weather API dataset to find the relevant information. Once I wrote a path to pull the specific data I wanted, I logged them to the page. Once I had the raw data, I used CSS to make the website visually appealing. In addition to formating the pulled data, I also had to append contextual units using different functions. Weather is usally read in Kelvin. Not only did I have to convert Kelvin to Fahrenheit, but also mark the measurement with an "F" for fahrenheit.

Overall, this project was a good practice in sorting through large datasets and presenting the raw format in a palatable way to the user.

## Installation

Javascript file: https://github.com/pariselectra/Five-Day-Weather-Forecast/blob/main/script.js

HTML file: https://github.com/pariselectra/Five-Day-Weather-Forecast/blob/main/index.html

CSS file: https://github.com/pariselectra/Five-Day-Weather-Forecast/blob/main/stylesheet.css

Live Site: https://pariselectra.github.io/Five-Day-Weather-Forecast/


## Usage

![Before Search](./images/Screen%20Shot%202022-10-09%20at%2011.56.18%20PM.png)
![After Search](./images/Screen%20Shot%202022-10-09%20at%2011.56.34%20PM.png)

## Credits

This challenge was created while in attendance at the University of Texas at Austin's Coding Bootcamp, in conjunction with Trilogy Education.

Weather API: https://openweathermap.org/forecast5

GeocodingAPI: https://openweathermap.org/api/geocoding-api

JSON viewer: http://jsonviewer.stack.hu/


## License

MIT License

https://github.com/pariselectra/Five-Day-Weather-Forecast/blob/main/LICENSE


## Features

-Search any city in the world

-Get consistently updated five day forecast