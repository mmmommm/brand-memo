import { reactive, toRefs, computed, SetupContext } from "@vue/composition-api"
import { firestore } from "@/firebase/fireStore"

export default ({root}: SetupContext) => {
  const state = reactive({
    currentpage: 1,
    pageLength: 1,
    memos: [] as any[],
    memoLists: [] as any[],
  })
  const isLoading= computed(() => root.$store.getters.isLoading)
  const pageSize = 9
  const pageLen = () => {
    if (state.memos.length < 9) {
      return
    } else {
      state.pageLength = Math.ceil(state.memos.length / pageSize)
    }
  }
  const pageChange = () => {
    state.memoLists = state.memos.slice(pageSize * (state.currentpage - 1), pageSize * (state.currentpage))
  }
  async function allMemo() {
    root.$store.commit('setLoading', true)
    await firestore
      .collection("memos")
      .get()
      .then((querySnapshot) => {
        const array: any[] = []
        querySnapshot.forEach((doc) => {
          array.push(doc.data())
        })
        state.memos = array
        //pageSizeに分けて取得する
        state.memoLists = state.memos.slice(0, pageSize)
      })
      .finally(() => {
        root.$store.commit('setLoading', false)
      })
    await pageLen()
  }
  const getMemo = () => {
    allMemo()
  }
  return {
    ...toRefs(state),
    pageChange,
    getMemo,
    isLoading,
  }
}
