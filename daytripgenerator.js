"use strict";

// (5 points): As a developer, I want to make at least three commits with descriptive messages.

let userName = "Rajah" //prompt("Hello! please enter your name")
console.log("Welcome "+ userName + ",")



// (5 points): As a user, I want a destination to be randomly selected for my day trip.
console.log("");
var userDestination =["Italy", "Germany","Philippines", "United States", "Australia"]
var randomDestination = userDestination[Math.floor(Math.random()*userDestination.length)];
console.log("You will be going to ")
console.log (randomDestination)





// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.

// var userToEatAt = ["Jollibee","A fake McDonalds", "Eat UpSideDown Resto", "Sushi kabushi"]
// var randomRestaurant = userToEatAt[Math.floor(Match.random()*userToEatAt.length)];
// console.log(randomRestaurant);

console.log("");
var userRestaurant =["Jollibee", "McDonalds","Bistro", "Bar", "BBq"]
var randomRestaurant = userRestaurant[Math.floor(Math.random()*userRestaurant.length)];
console.log("And you will be having your meal at ")
console.log(randomRestaurant)





// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.

console.log("");
var userWillRide =["Bicycle", "Uber","Cow", "Goat", "Pig"]
var randomTransport = userWillRide[Math.floor(Math.random()*userWillRide.length)];
console.log("You will be riding the following to get to your destination ")
console.log(randomTransport)





// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.

console.log("");
var userEntertainment =["YowYow", "Count the Grass","Pet a Cow", "Do nothing", "Sleep"]
var randomEntertainment = userEntertainment[Math.floor(Math.random()*userEntertainment.length)];
console.log("To entertain yourself when you get board during your travel, to the following ")
console.log(randomEntertainment)






// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.








// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.








// (10 points): As a user, I want to display my completed trip in the console.








// (5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

