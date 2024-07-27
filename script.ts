let cashInRegister = 100;
const orderQueue: NewOrder[] = [];
let nextOrderId = 1;
let nextPizzaId = 1;

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
  { id: nextPizzaId++, name: "Margherita", price: 10 },
  { id: nextPizzaId++, name: "Funghi", price: 12 },
  { id: nextPizzaId++, name: "Veggie", price: 11 },
  { id: nextPizzaId++, name: "Spinaci", price: 12 },
];

function addNewPizza(newPizza: Omit<Pizza, "id">): Pizza {
  const pizzaObj: Pizza = {
    id: nextPizzaId++,
    ...newPizza,
  };
  menu.push(pizzaObj);
  return pizzaObj;
}

function placeOrder(order: string): NewOrder | undefined {
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

function completeOrder(orderId: number): NewOrder | undefined {
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

function getPizzaDetail(identifier: string | number): Pizza | undefined {
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
addNewPizza({ name: "Test Pizza", price: 5 });
placeOrder("Test Pizza");
completeOrder(1);
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);
console.log(getPizzaDetail("veggie"));
