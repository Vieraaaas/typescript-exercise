type Pizza = {
  id: number;
  name: string;
  price: number;
};

type NewOrder = {
  pizza: Pizza;
  status: "ordered" | "completed";
  id: number;
};

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 10 },
  { id: 2, name: "Funghi", price: 12 },
  { id: 3, name: "Veggie", price: 11 },
  { id: 4, name: "Spinaci", price: 12 },
];
let cashInRegister = 100;
const orderQueue: NewOrder[] = [];
let nextOrderId = 1;

function addNewPizza(newPizza: Pizza) {
  menu.push(newPizza);
}

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

function getPizzaDetail(identifier: string | number) {
  if (typeof identifier === "string") {
    const searchedPizza = menu.find(
      (menuEntry) => menuEntry.name.toLowerCase() === identifier.toLowerCase()
    );
    return searchedPizza;
  } else if (typeof identifier === "number") {
    const searchedPizza = menu.find((menuEntry) => menuEntry.id === identifier);
    return searchedPizza;
  }
}

// Tests:
addNewPizza({ id: 5, name: "Test Pizza", price: 5 });
placeOrder("Test Pizza");
completeOrder(1);
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);
console.log(getPizzaDetail("veggie"));
