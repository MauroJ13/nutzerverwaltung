export type Gender = "Männlich" | "Weiblich" | "Divers" | "Keine Angabe";

export type User = {
  id: number;
  name: string;
  dob: string;
  gender: Gender;
  email: string;
  address: string;
  phone: string;
  web: string;
  photo: string;
};
