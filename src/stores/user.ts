import { reactive } from '@vue/composition-api'
import firebase from "firebase/app"
import { firebaseauth } from "@/firebase/firebaseAuth"
import { firestore } from "@/firebase/fireStore"
import router from "@/router"

export default function userStore() {
  const state = reactive({
    user: null as string | null,
    isUser: false,
    isAuthenticated: false,
  })
  return {
    get isAuthenticated() {
      return state.isAuthenticated
    },
    get isUser() {
      return state.isUser
    },
    setUser(payload: string | null) {
      return (state.user = payload)
    },
    setIsUser(payload: boolean) {
      return (state.isUser = payload)
    },
    setIsAuthenticated(payload: boolean) {
      return (state.isAuthenticated = payload)
    },
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebaseauth
        .signInWithPopup(provider)
        .then((result) => {
          if (result.user == null) return
          const userData = {
            id: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
          }
          firestore.collection("users").doc(result.user.uid).set(userData)
          router.push("/")
        })
        .catch(() => {
          router.push("/")
        })
    },
    logout() {
      firebaseauth
        .signOut()
        .then(() => {
          this.setUser(null)
          this.setIsUser(false)
          this.setIsAuthenticated(false)
          router.push("/")
        })
        .catch(() => {
          // エラー処理を書く
          router.push("/")
        })
    },
  }
}