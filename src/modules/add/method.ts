import { SetupContext, reactive, toRefs, ref } from '@vue/composition-api'
import { firestore } from "@/firebase/fireStore"
import * as rules from '@/config/rules'
interface VForm extends Vue {
  validate(): boolean;
}
export default ({root}: SetupContext) => {
  const state = reactive({
    capitalization: 0 as number | null,
    code: null as number | null,
    date: null as Date | null,
    floating: null as number | null,
    name: "" as string | null,
    price: null as number | null,
    reason: "" as string | null,
    theme: "" as string | null,
    url: "" as string | null,
    author: root.$store.state.user,
    menu: false,
    valid: true,
  })
  const form = ref<VForm>()

  const codeRules = () => { return rules.codeRules }
  const nameRules = () => { return rules.nameRules }
  const capitalizationRules = () => { return rules.capitalizationRules }
  const floatRules = () => { return rules.floatRules }
  const themeRules = () => { return rules.themeRules }
  const priceRules = () => { return rules.priceRules }
  const urlRules = () => { return rules.urlRules }
  const reasonRules = () => { return rules.reasonRules }
  const generateDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}/${month}/${day}`
  }
  const generateUUID = (): string => {
    let d = new Date().getTime()
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16)
      }
    )
    return uuid
  }
  const saveMemo = () => {
    if(form.value?.validate()) {
      const slug = generateUUID()
      firestore.collection("memos").doc(slug).set({
        capitalization: state.capitalization,
        code: state.code,
        date: state.date,
        floating: state.floating,
        name: state.name,
        price: state.price,
        reason: state.reason,
        theme: state.theme,
        url: state.url,
        author: state.author,
        slug: slug,
      })
      root.$router.push("/")
    }
  }
  return {
    saveMemo,
    codeRules,
    nameRules,
    capitalizationRules,
    floatRules,
    themeRules,
    priceRules,
    urlRules,
    reasonRules,
    generateDate,
    ...toRefs(state)
  }
}