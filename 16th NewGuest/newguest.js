// Creating a guest list array
var guestList = ["Maaz", "Burhan", "ALizey", "Mirha"];
// Making variable for those guest who could not come
var dontCome = guestList[0];
// Printing the guest who is not coming 
console.log(dontCome, "Nai Ah Skta");
// Add or Removes value from Guest List Array
guestList.splice(0, 1, "Amir");
// Message print for Bigger Table
console.log("Good News! we have found a bigger table for dinner");
// Adding a new guest at starting index of array
guestList.unshift("Ali");
// Adding a new guest at ending index of array
guestList.push("Zain");
// Get a middle index for our array 
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to the middle of index
guestList.splice(middleIndex, 0, "Usama");
// Printing a message of updated list
console.log("Updated list of our guests");
// Printing a message of updated list
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to have dinner with us")); });
