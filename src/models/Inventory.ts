import Product from "./Product";
//one dot means it's in same folder

export interface InventoryItem {
  product: Product;
  quantity: number;
}
