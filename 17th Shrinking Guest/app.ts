// Creating a guest list array
let guestList = ["Maaz","Burhan","ALizey","Mirha"];
// Making variable for those guest who could not come
let dontCome = guestList[0];
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
let middleIndex: number = Math.floor(guestList.length /2 );
// Adding a new guest to the middle of index
guestList.splice(middleIndex, 0, "Usama" );
// Printing a message of updated list
console.log("Updated list of our guests");
// Printing a message of updated list
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to have dinner with us`));
// Inform that only two guest can arrive
console.log("unfortunately, the new dinner table won't arrive on time, so I can only invite two guests to dinner with me");

