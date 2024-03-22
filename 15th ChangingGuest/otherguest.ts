let guestList = ["Maaz","Burhan","ALizey","Mirha"];
let dontCome = guestList[0];
console.log(dontCome, "Nai Ah Skta");
guestList.splice(0, 1, "Amir");
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to have dinner with me`));
