import { ITEMS } from "../../app/shared/ITEMS";

export const selectAllItems = () => {
  return ITEMS;
};

// export const selectRandomItem = () => {
//   return ITEMS[Math.floor(Math.random() * ITEMS.length)];
// };

export const selectItemById = (id) => {
  return ITEMS.find((item) => item.id === id);
};
