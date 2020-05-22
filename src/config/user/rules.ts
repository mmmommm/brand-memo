export const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /^\S+@\S+\.\S+$/.test(v) || 'E-mail must be valid',
]
export const passwordRules = [
  (v: string) => /.{6,}/.test(v) || 'Password should be at least 6 characters',
]
export const codeRules = [
  (v: number) => !!v || 'code is required',
  //vのnumber型を許容できるようにする
  // (v: string) => /.{4}/.test(v) || 'code must be 4 numbers'
]
export const nameRules = [
  (v: string) => !!v || 'name is required'
]
export const capitalizationRules = [
  (v: number) => !!v || 'capitalization is required'
]
export const floatRules = [
  (v: number) => !!v || 'float is required'
]
export const themeRules = [
  (v: string) => !!v || 'theme is required'
]
export const priceRules = [
  (v: number) => !!v || 'price is required'
]
export const urlRules = [
  (v: string) => !!v || 'url is required',
  //tsconfigで無効化する方法がわからなかった
  // eslint-disable-next-line
  (v: string) => !v || /^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/.test(v) || 'Url is invalid',
]
export const reasonRules = [
  (v: string) => !!v || 'reason is required'
]

