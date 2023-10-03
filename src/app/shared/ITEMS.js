import americanoImg from "../assets/img/americano1.jpg";
import caffeLatteImg from "../assets/img/latte1.jpg";
import caffeMochaImg from "../assets/img/mocha1.jpg";
import capuccinoImg from "../assets/img/cappuccino1.jpg";
import caramelMacchiatoImg from "../assets/img/macchiato1.jpg";
import espressoImg from "../assets/img/espresso1.jpg";
import frenchVanillaImg from "../assets/img/french-vanilla1.jpg";
import darkChocolateImg from "../assets/img/hot-chocolate1.jpg";
import teaImg from "../assets/img/tea1.jpg";

import pumpkinSpiceLatteImg from "../assets/img/pumpkin-spice-latte.jpg";

export const ITEMS = [
  {
    id: 0,
    name: "Caffè Americano",
    image: americanoImg,
    featured: false,
    calories: 15,
    sugar: 0,
    fat: 0,
    dairyfree: true,
    description:
      "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.",
  },
  {
    id: 1,
    name: "Caffè Latte",
    image: caffeLatteImg,
    featured: false,
    calories: 190,
    sugar: 18,
    fat: 7,
    dairyfree: false,
    description:
      "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.",
  },
  {
    id: 2,
    name: "Caffè Mocha",
    image: caffeMochaImg,
    featured: false,
    calories: 370,
    sugar: 35,
    fat: 15,
    dairyfree: false,
    description:
      "Our rich, full-bodied espresso combined with bittersweet mocha sauce and steamed milk, then topped with sweetened whipped cream. The classic coffee drink that always sweetly satisfies.",
  },
  {
    id: 3,
    name: "Capuccino",
    image: capuccinoImg,
    featured: false,
    calories: 140,
    sugar: 12,
    fat: 5,
    dairyfree: false,
    description:
      "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
  },
  {
    id: 4,
    name: "Espresso",
    image: espressoImg,
    featured: true,
    calories: 10,
    sugar: 0,
    fat: 0,
    dairyfree: true,
    description:
      "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    image: caramelMacchiatoImg,
    featured: true,
    calories: 250,
    sugar: 33,
    fat: 7,
    dairyfree: false,
    description:
      "Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle for an oh-so-sweet finish.",
  },
  {
    id: 6,
    name: "French Vanilla",
    image: frenchVanillaImg,
    featured: true,
    calories: 90,
    sugar: 13,
    fat: 2.5,
    dairyfree: false,
    description:
      "Our signature French Vanilla Coffee is a more complex version of a classic vanilla coffee. Instead of plain vanilla syrup, this concoction is usually made with the extract from vanilla bean pods or flavored hazelnut and vanilla syrups.",
  },
  {
    id: 7,
    name: "Hot Chocolate",
    image: darkChocolateImg,
    featured: true,
    calories: 370,
    sugar: 37,
    fat: 16,
    dairyfree: false,
    description:
      "Steamed milk with chocolate-flavored syrups. Topped with sweetened whipped cream and chocolate-flavored drizzle. A timeless classic made to sweeten your spirits.",
  },
  {
    id: 8,
    name: "Earl Grey Tea",
    image: teaImg,
    featured: true,
    calories: 0,
    sugar: 0,
    fat: 0,
    dairyfree: true,
    description:
      "We take a strong black tea base and add the essence of bergamot, a citrus fruit with subtle lemon and floral lavender notes, to create this aromatically awesome tea flavor.",
  },
  // {
  //   id: 9,
  //   name: "Pumpkin Spice Latte",
  //   image: pumpkinSpiceLatteImg,
  //   featured: false,
  //   calories: 390,
  //   sugar: 50,
  //   fat: 14,
  //   dairyfree: false,
  //   description:
  //     "Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Enjoy it topped with whipped cream and real pumpkin-pie spices.",
  // },
];
