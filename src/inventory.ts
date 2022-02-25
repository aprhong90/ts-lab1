import { InventoryItem } from "./models/Inventory";
import Product from "./models/Product";

const products: Product[] = [
  { name: "motor", price: 10.0 },
  { name: "sensor", price: 12.5 },
  { name: "LED", price: 1.0 },
];
const inventory: InventoryItem[] = [
  {
    product: products[0],
    quantity: 10,
  },
  {
    product: products[1],
    quantity: 4,
  },
  {
    product: products[2],
    quantity: 20,
  },
];

const calcInventoryValue = (inventory: InventoryItem[]): number => {
  if (inventory.length === 0) {
    return 0;
  } else {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
      let price = products[i].price;
      let quantity = inventory[i].quantity;
      total += price * quantity;
    }
    return total;
  }
};

console.log(calcInventoryValue(inventory));
