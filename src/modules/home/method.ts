import { reactive, toRefs } from "@vue/composition-api"
import { firestore } from "@/firebase/fireStore"

export default () => {
  const state = reactive({
    currentpage: 1,
    pageLength: 1,
    loading: false,
    memos: [] as any[],
    memoLists: [] as any[],
  })
  const pageSize = 9
  const pageLen = () => {
    if (state.memos.length < 9) {
      return
    }
    state.pageLength = Math.ceil(state.memos.length / pageSize)
  }
  const pageChange = () => {
    state.memoLists = state.memos.slice(pageSize * (state.currentpage - 1), pageSize * (state.currentpage))
  }
  async function allMemo() {
    state.loading = true
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
      .finally(() => state.loading = false)
  }
  const getMemo = () => {
    allMemo()
    pageLen()
  }
  return {
    ...toRefs(state),
    pageChange,
    getMemo,
  }
}
