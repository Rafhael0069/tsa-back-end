export type User = {
  id?: number;
  user_name: string;
  user_email: string;
  birth_date: Date;
  encrypted_password: string;
  image_adrress: string;
  verified: boolean;
};
