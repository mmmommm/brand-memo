export const passwordRules = [
  (v: string) => /.{6,}/.test(v) || "Password should be at least 6 characters"
];
