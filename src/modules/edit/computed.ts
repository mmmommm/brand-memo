import { SetupContext, reactive, toRefs } from "@vue/composition-api"
import { firestore } from "@/firebase/fireStore"
import * as rules from '@/config/rules'

export default ({ root }: SetupContext, slug: string) => {
  const state = reactive({
    capitalization: 0,
    code: 0,
    date: "",
    floating: 0,
    name: "",
    price: 0,
    reason: "",
    theme: "",
    url: "",
    slug: slug,
    author: "",
    valid: true,
  })
  const codeRules = () => { return rules.codeRules }
  const nameRules = () => { return rules.nameRules }
  const capitalizationRules = () => { return rules.capitalizationRules }
  const floatRules = () => { return rules.floatRules }
  const themeRules = () => { return rules.themeRules }
  const priceRules = () => { return rules.priceRules }
  const urlRules = () => { return rules.urlRules }
  const reasonRules = () => { return rules.reasonRules }
  const getEditMemo = () => {
    firestore
      .collection("memos")
      .where("slug", "==", state.slug)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          state.capitalization = doc.data().capitalization
          state.code = doc.data().code
          state.date = doc.data().date
          state.floating = doc.data().floating
          state.name = doc.data().name
          state.price = doc.data().price
          state.reason = doc.data().reason
          state.theme = doc.data().theme
          state.url = doc.data().url
          state.author = doc.data().author
        })
      })
      .then(() => {
        //ログインしていない時に両方ともnullになり通過してしまうため追加
        if (root.$store.state.user == state.author && root.$store.state.user != null) {
          root.$store.commit("setIsUser", true)
        } else {
          root.$store.commit("setIsUser", false)
        }
      })
      .catch(() => {
        alert('失敗しました、少し時間をあけて再度お試しください。')
      })
  }

  const updateMemo = () => {
    firestore
      .collection("memos")
      .doc(state.slug)
      .update({
        capitalization: state.capitalization,
        code: state.code,
        date: state.date,
        floating: state.floating,
        name: state.name,
        price: state.price,
        reason: state.reason,
        theme: state.theme,
        url: state.url,
      })
      .then(() => {
        root.$router.push("/")
      })
      .catch(() => {
        alert("エラーが発生しました、少し時間をおいて再実行してください。")
        root.$router.push("/MemoMyPage")
      })
  }

  return {
    ...toRefs(state),
    codeRules,
    nameRules,
    capitalizationRules,
    floatRules,
    themeRules,
    priceRules,
    urlRules,
    reasonRules,
    getEditMemo,
    updateMemo
  }
}

