export type User = {
  id? : Number;
  userName: String;
  userEmail: String;
  birthDate: String;
  encryptedPassword?: String;
  imageAdrress: String;
  verified: Boolean;
};
