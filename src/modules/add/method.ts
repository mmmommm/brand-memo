import { SetupContext, reactive, toRefs } from '@vue/composition-api'
import { firestore } from "@/firebase/fireStore"
interface VForm extends Vue {
  validate(): boolean;
}
export default ({root}: SetupContext) => {
  const state = reactive({
    capitalization: null as number | null,
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
  let $refs!: {
    form: VForm;
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
    if ($refs.form.validate()) {
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
      root.$router.push({ path: "/" })
    }
  }
  return {
    generateUUID,
    saveMemo,
    ...toRefs(state)
  }
}