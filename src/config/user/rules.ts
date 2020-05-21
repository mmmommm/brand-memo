export const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
]
export const passwordRules = [
  (v: string) => /.{6,}/.test(v) || 'Password should be at least 6 characters',
]
export const codeRules = [
  (v: number) => !!v || 'code is required',
]
// export const urlRules = [
//   (v: string) => !v || /^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/.test(v) || 'Url is invalid',
// ]
