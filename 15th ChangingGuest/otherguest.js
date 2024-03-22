var guestList = ["Maaz", "Burhan", "ALizey", "Mirha"];
var dontCome = guestList[0];
console.log(dontCome, "Nai Ah Skta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to have dinner with me")); });
