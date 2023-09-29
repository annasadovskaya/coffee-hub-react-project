import americanoImg from "../assets/img/americano.jpg";
import caffeLatteImg from "../assets/img/caffe-latte.jpg";
import caffeMochaImg from "../assets/img/caffe-mocha.jpg";
import capuccinoImg from "../assets/img/capuccino.jpg";
import caramelMacchiatoImg from "../assets/img/caramel-macchiato.jpg";
import pumpkinSpiceLatteImg from "../assets/img/pumpkin-spice-latte.jpg";

export const ITEMS = [
  {
    id: 0,
    name: "Caffè Americano",
    image: americanoImg,
    featured: true,
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
    name: "Caramel Macchiato",
    image: caramelMacchiatoImg,
    featured: false,
    calories: 250,
    sugar: 33,
    fat: 7,
    dairyfree: false,
    description:
      "Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle for an oh-so-sweet finish.",
  },
  {
    id: 5,
    name: "Pumpkin Spice Latte",
    image: pumpkinSpiceLatteImg,
    featured: false,
    calories: 390,
    sugar: 50,
    fat: 14,
    dairyfree: false,
    description:
      "Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Enjoy it topped with whipped cream and real pumpkin-pie spices.",
  },
];
