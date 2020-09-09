export const urlRules = [
  (v: string) => !!v || "url is required",
  //tsconfigで無効化する方法がわからなかった
  // eslint-disable-next-line
  (v: string) => !v || /^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/.test(v) || "Url is invalid"
];
