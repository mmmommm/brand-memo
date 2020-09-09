export const emailRules = [
  (v: string) => !!v || "E-mail is required",
  (v: string) => /^\S+@\S+\.\S+$/.test(v) || "E-mail must be valid"
];
