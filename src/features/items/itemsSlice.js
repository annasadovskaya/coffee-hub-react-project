import { ITEMS } from "../../app/shared/ITEMS";

export const selectAllItems = () => {
  return ITEMS;
};

export const selectRandomItem = () => {
  return ITEMS[Math.floor(Math.random() * ITEMS.length)];
};
