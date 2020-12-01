import { SetupContext, reactive, toRefs } from "@vue/composition-api"
import { firestore } from "@/firebase/fireStore"

export default ({ root }: SetupContext) => {
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
    valid: true,
    menu: false,

  })

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
    updateMemo
  }
}

