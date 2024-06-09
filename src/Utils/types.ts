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

export type CryptoProps = {
  id: string;
  name: string;
  value: number;
  image: string;
  quantity: number;
};
