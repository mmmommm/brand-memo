import { reactive, SetupContext } from "@vue/composition-api"
import { firestore } from "@/firebase/fireStore"

export default ({ root }: SetupContext) => {
  const state = reactive({
    loading: false,
    memos: [] as any[],
  })

  async function myMemo() {
    await firestore
      .collection("memos")
      .where("author", "==", root.$store.state.user)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          state.memos.push(doc.data())
        })
      })
      .finally(() => (state.loading = false))
  }
  const getMemo = () => {
    myMemo()
  }
  return {
    getMemo,
  }
}
