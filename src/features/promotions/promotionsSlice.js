import { PROMOTIONS } from "../../app/shared/PROMOTIONS";
import { ITEMS } from "../../app/shared/ITEMS";

export const selectFeaturedItem = () => {
  return ITEMS.find((item) => item.featured);
};

export const selectFeaturedPromotion = () => {
  return PROMOTIONS.find((item) => item.featured);
};
