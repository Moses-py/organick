type Button = {
  variant: ButtonType;
  children: React.ReactNode;
  classname?: string;
};

type ButtonType = "primary" | "yellow" | "default";

type ThumbCard = {
  url: string;
  category: FoodCategory | string;
  price: string;
  discount: string;
  name: string;
  classname?: string;
};

type FoodCategory =
  | "Vegetable"
  | "Fruit"
  | "Nuts"
  | "Legume"
  | "Fresh"
  | "Cereal"
  | "Food";

type NewsCard = {
  author: string;
  title: string;
  content: string;
  image: string;
  classname?: string;
};
