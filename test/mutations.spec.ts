import mutations from "@/store/index"

describe("test mutations function", () => {
  const state = {
    user: "",
    isAuthenticated: false,
    isUser: false,
    dialog: false,
    loading: false,
    searchTerm: 0,
  }
  mutations.commit('setUser', "dummy")
  expect(state.user).toBe("dummy")
  mutations.commit('setIsUser', true)
  expect(state.isUser).toBeTruthy()
  mutations.commit('setIsAuthenticated', true)
  expect(state.isAuthenticated).toBeTruthy()
  mutations.commit('setSearchTerm', 1111)
  expect(state.searchTerm).toBe(1111)
  mutations.commit('setDialog', true)
  expect(state.dialog).toBeTruthy()
  mutations.commit('setLoading', true)
  expect(state.loading).toBeTruthy()
})
