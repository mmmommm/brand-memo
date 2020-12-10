import { reactive, toRefs, SetupContext, computed } from "@vue/composition-api"
import { firestore } from "@/firebase/fireStore"
import firebase from "@firebase/firestore-types"

export default ({ root }: SetupContext) => {
  const state = reactive({
    memos: [] as firebase.DocumentData[],
    haveMemo: false,
  })
  const isLoading = computed(() => root.$store.getters.isLoading)

  const haveMemo = () => {
    state.memos.length !== 0 ? state.haveMemo = true : state.haveMemo = false
  }

  async function myMemo() {
    root.$store.commit('setLoading', true)
    await firestore
      .collection("memos")
      .where("author", "==", root.$store.state.user)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          state.memos.push(doc.data())
        })
      })
    await haveMemo()
    root.$store.commit('setLoading', false)
  }
  const getMyMemo = () => {
    myMemo()
  }
  return {
    ...toRefs(state),
    isLoading,
    getMyMemo,
  }
}
