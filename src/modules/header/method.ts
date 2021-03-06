import { SetupContext, reactive, toRefs, computed } from "@vue/composition-api"
import { firebaseauth } from '@/firebase/firebaseAuth'
export default({root}: SetupContext) => {
  const state = reactive({
    user: null as string | null,
    group: null as string | null,
    drawer: false
  })
  const isAuthenticated = computed(() => root.$store.getters.isAuthenticated)
  const setUser = () => {
    firebaseauth.onAuthStateChanged((user) => {
      if (user) {
        state.user = user.displayName
        root.$store.commit('setIsAuthenticated', true)
        root.$store.commit('setUser', state.user)
      }
    })
  }
  const isDrawer = () => {
    state.drawer = true
  }
  return {
    ...toRefs(state),
    isAuthenticated,
    setUser,
    isDrawer
  }
}