import { SetupContext, reactive } from '@vue/composition-api'
import { firestore } from "@/firebase/fireStore"

export default({root}: SetupContext) => {
  const state = reactive({
    capitalization: null as number | null,
    code: null as number | null,
    date: null as string | null,
    floating: null as number | null,
    name: null as string | null,
    price: null as number | null,
    reason: null as string | null,
    theme: null as string | null,
    url: null as string | null,
    slug: '' as string | undefined,
    author: null as string | null,
    dialog: false
  })
  const isUser = () => {
    return root.$store.getters.isUser
  }
  const getSpecificMemo = () => {
    firestore
    .collection("memos")
    .where("slug", "==", root.$route.params.memo)
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
        state.slug = doc.data().slug
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
  }
  const detailInit = () => {
    getSpecificMemo()
    isUser()
  }
  return {
    getSpecificMemo,
    detailInit
  }
}