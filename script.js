// var firstName = "Swathi";
// var lastName = "Mukkamala";
// var age = 21;
// var likesTravel = true;

// var movieArray = ["Love, Rosie", "Frozen II", "Shutter Island"]

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(likesTravel);

// console.log(movieArray);
// console.log(movieArray[0],",",movieArray[1],",",movieArray[2])

// var swathiObject = {
//     firstName: Swathi,
//     lastName: Mukkamala,
//     age: 21,
//     likesTravel: true,
//     favoriteMovies: ["Frozen II" ,"Shutter Island"]
// }

// console.log(swathiObject.firstName)

//Practice 1: Today's Weather

// var temperature = 67;
// var conditions = "cloudy";
// var sunriseTime = "7:30 AM";
// var sunsetTime = "7:38 PM";

// console.log(temperature,conditions,sunriseTime,sunsetTime);

// console.log("It's currently", conditions, "and", temperature,"degrees. The sun rose this morning at", sunriseTime, "and will set at", sunsetTime, ".");

// // var weatherStatement = "It's currently " + conditions + " and "+ temperature + " degrees. The sun rose this morning at " + sunriseTime + "and will set at"+ sunsetTime+ ".";

//Practice 2: Weather Data

// var highTemperatures = [55, 57, 53, 47, 56, 50];
// var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

// console.log(highTemperatures[0]);
// console.log(lowTemperatures[0]);

// var averageHigh = (highTemperatures[0]+highTemperatures[1]+highTemperatures[2]+highTemperatures[3]+highTemperatures[4]+highTemperatures[5])/highTemperatures.length;

// var averageLow = (lowTemperatures[0]+lowTemperatures[1]+lowTemperatures[2]+lowTemperatures[3]+lowTemperatures[4]+lowTemperatures[5])/lowTemperatures.length;

// console.log(averageHigh);
// console.log(averageLow);

// var weatherStatement = "It's currently " + conditions + " and "+ temperature + " degrees. The sun rose this morning at " + sunriseTime + " and will set at "+ sunsetTime+ ". The average high temperature this week is "+ averageHigh + ". The average low temperature this week is "+ averageLow + ".";

// console.log(weatherStatement);

//Practice 3: Weather Object

var currentWeather = {
    temperature: 67,
    conditions: "cloudy"
}

console.log(currentWeather.temperature);

var currentWeather = "It's "+ currentWeather.temperature +" degrees F and " + currentWeather.conditions + ".";

console.log(currentWeather);

//Practice 4: Nested Weather Objects

var todaysWeather = {
    temperature: {
      high: 55,
      low: 32
    },
    conditions: "sunny",
    astronomy: {
      sunrise: "7:43 AM",
      sunset: "5:09 PM"
    }
  }

console.log(todaysWeather.temperature.high);
console.log(todaysWeather.temperature.low);
console.log(todaysWeather.conditions);
console.log(todaysWeather.astronomy.sunrise);

var weatherStatement = "It's quite " + todaysWeather.conditions + " outside today. The temperature today will soar as high as " + todaysWeather.temperature.high + " degrees and drop to as low as "+ todaysWeather.temperature.low + " degrees. The sun rose this morning at " + todaysWeather.astronomy.sunrise + " and will set at "+ todaysWeather.astronomy.sunset + ". And that's today's weather report. Back to you Jan!"

console.log(weatherStatement);

//Practice 5: Weather Forecast

var weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]

   console.log(weatherForecast[0].conditions);
   console.log(weatherForecast[1].temperature.high);
   console.log(weatherForecast[1].astronomy.sunrise);
   console.log(weatherForecast[2].conditions);
   console.log(weatherForecast[2].astronomy.sunset);

   var weatherForecastStatement = "The high on " + weatherForecast[2].day + " will be " + weatherForecast[2].temperature.high + " and the low will be " + weatherForecast[2].temperature.low + ". We're predicting a " + weatherForecast[2].conditions + ". The sun will rise at " + weatherForecast[2].astronomy.sunrise + " and will set at " + weatherForecast[2].astronomy.sunset + ".";

   console.log(weatherForecastStatement);

   //Practice 6: Student Grades

   var williamGrades = [62, 97, 99, 85, 73, 97];

   console.log(williamGrades[0]);
   console.log(williamGrades[williamGrades.length]);
   //find William's average grade

   //Practice 7: Movie Star

   //Practice 8: Dwayne's Hobbies

   //Challenge: Weather Data




