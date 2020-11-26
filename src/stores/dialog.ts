import { reactive } from '@vue/composition-api'

export default function dialogStore() {
  const state = reactive({
    dialog: false,
  })
  return {
    get isDialog() {
      return state.dialog
    },
    setDialog() {
      return !state.dialog
    }
  }
}