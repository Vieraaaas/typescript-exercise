const menu = [
  { name: "Margherita", price: 10 },
  { name: "Funghi", price: 12 },
  { name: "Veggie", price: 11 },
  { name: "Spinaci", price: 12 },
];
let cashInRegister = 100;
const orderQueue = [];

// Step 1: Add a function that takes a pizza object and adds it to  the menu
function addNewPizza(newPizza) {
  menu.push(newPizza);
}

// Step 2: Add a function that takes a pizza name parameter and:
//1. finds that pizza object in the menu
//2. adds the income(price) to cashInRegister
//3. pushes a new order object to orderQueue
//4. returns the new order object
function placeOrder(order) {
  const orderedPizza = menu.find((menuEntry) => menuEntry.name === order);
  const newOrder = { pizza: orderedPizza, status: "ordered" };
  cashInRegister += orderedPizza.price;
  orderQueue.push(newOrder);
  return newOrder;
}

//Step 3: Add a function that takes an orderId as a parameter, that:
//1. finds the correct order in orderQueue
//2. marks it's status as "completed"
//3. returns the order
function completeOrder(orderId) {}
