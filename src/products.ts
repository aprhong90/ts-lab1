import Product from "./models/Product";

const products: Product[] = [
  {
    name: "glasses",
    price: 150,
  },
  {
    name: "rug",
    price: 100,
  },
  {
    name: "pencil",
    price: 3,
  },
];

const calcAverageProductPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let item of products) {
      sum += item.price;
    }
    return sum / products.length;
  }
};
console.log("empty array", calcAverageProductPrice([]));
console.log("averageProductPrice", calcAverageProductPrice(products));
