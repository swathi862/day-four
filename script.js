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

// var temperature = 67;
// var conditions = "cloudy";
// var sunriseTime = "7:30 AM";
// var sunsetTime = "7:38 PM";

// console.log(temperature,conditions,sunriseTime,sunsetTime);

// console.log("It's currently", conditions, "and", temperature,"degrees. The sun rose this morning at", sunriseTime, "and will set at", sunsetTime, ".");

// // var weatherStatement = "It's currently " + conditions + " and "+ temperature + " degrees. The sun rose this morning at " + sunriseTime + "and will set at"+ sunsetTime+ ".";

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

var currentWeather = {
    temperature: 67,
    conditions: "cloudy"
}

console.log(currentWeather.temperature);

var currentWeather = "It's "+ currentWeather.temperature +" degrees F and " + currentWeather.conditions + ".";

console.log(currentWeather);

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

console.log()