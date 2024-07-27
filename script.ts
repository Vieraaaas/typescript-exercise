type Pizza = {
  name: string;
  price: number;
};

type NewOrder = {
  pizza: Pizza;
  status: "ordered" | "completed";
  id: number;
};

const menu = [
  { name: "Margherita", price: 10 },
  { name: "Funghi", price: 12 },
  { name: "Veggie", price: 11 },
  { name: "Spinaci", price: 12 },
];
let cashInRegister = 100;
const orderQueue: NewOrder[] = [];
let nextOrderId = 1;

// Step 1: Add a function that takes a pizza object and adds it to  the menu
function addNewPizza(newPizza: Pizza) {
  menu.push(newPizza);
}

// Step 2: Add a function that takes a pizza name parameter and:
//1. finds that pizza object in the menu
//2. adds the income(price) to cashInRegister
//3. pushes a new order object to orderQueue
//4. returns the new order object
function placeOrder(order: string) {
  const orderedPizza = menu.find((menuEntry) => menuEntry.name === order);
  const newOrder: NewOrder = {
    pizza: orderedPizza!, // "!"is a non-null assertion operator (i.e, orderedPizza will never be undefined)
    status: "ordered",
    id: nextOrderId,
  };
  if (!orderedPizza) {
    console.error("${order} does not exist in the menu.");
    return;
  }
  cashInRegister += orderedPizza.price;
  orderQueue.push(newOrder);
  nextOrderId++;
  return newOrder;
}

//Step 3: Add a function that takes an orderId as a parameter that:
//1. finds the correct order in orderQueue
//2. marks it's status as "completed"
//3. returns the order
function completeOrder(orderId: number) {
  const completedOrder = orderQueue.find(
    (orderEntry) => orderEntry.id === orderId
  );
  if (!completedOrder) {
    console.error("$The order {orderId} does not exist!");
    return;
  }
  completedOrder.status = "completed";
  return completedOrder;
}

// Tests:
addNewPizza({ name: "Test Pizza", price: 5 });
placeOrder("Test Pizza");
completeOrder(1);
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);
