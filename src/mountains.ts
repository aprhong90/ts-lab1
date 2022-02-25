import { Mountain } from "./models/Mountain";
const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (mountains: Mountain[]): string => {
  if (mountains.length === 0) {
    return "";
  } else {
    let currentTallestMountain: Mountain = mountains[0];
    mountains.forEach((item) => {
      if (item.height > currentTallestMountain.height) {
        currentTallestMountain = item;
      }
    });
    return currentTallestMountain.name;
  }
};

console.log("Everest", findNameOfTallestMountain(mountains));
console.log("Empty array", findNameOfTallestMountain([]));

// npx ts-node src/mountains.ts
