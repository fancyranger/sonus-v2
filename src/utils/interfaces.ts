export type Card = {
  to: string;
  title: string;
  description: string;
  bg: string;
  color: string;
  data?: Cards;
};

export type Cards = {
  [keys: string]: Card;
};
