const menu = [
  { name: "Margherita", price: 10 },
  { name: "Funghi", price: 12 },
  { name: "Veggie", price: 11 },
  { name: "Spinaci", price: 12 },
];
const cashInRegister = 100;
const orderQueue = [];

// Step 1: Add a function that takes a pizza object and adds it to  the menu
function addNewPizza(newPizza) {
  menu.push(newPizza);
}
