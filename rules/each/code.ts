export const codeRules = [
  (v: number) => !!v || "code is required"
  //vのnumber型を許容できるようにする
  // (v: string) => /.{4}/.test(v) || 'code must be 4 numbers'
];
