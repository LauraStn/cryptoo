export type RegisterProps = {
  email: string;
  firstName: string;
  lastName: string;
  pseudo: string;
  city: string;
  password: string;
  promoCode?: string;
};

export type LoginProps = {
  email: string;
  password: string;
};
