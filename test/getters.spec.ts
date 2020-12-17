import getters from "@/store/index"

describe('test getters function', () => {
  const state = {
    isAuthenticated: false,
    isUser: false,
    dialog: false,
    loading: false,
  }
  expect(getters.getters.isAuthenticated(state.isAuthenticated)).toBeFalsy()
  expect(getters.getters.isUser(state.isUser)).toBeFalsy()
  expect(getters.getters.isDialog(state.dialog)).toBeFalsy()
  expect(getters.getters.isLoading(state.loading)).toBeFalsy()
})