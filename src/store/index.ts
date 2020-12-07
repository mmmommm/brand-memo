import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import { firebaseauth } from '@/firebase/firebaseAuth'
import { firestore } from '@/firebase/fireStore'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //ユーザー名
    user: null as string | null,
    //ログインしている人とメモの作者が同一人物であるか
    isUser: false,
    //ログインしているか
    isAuthenticated: false,
    searchTerm: null as number | null,
    dialog: false,
    loading: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setIsUser(state, payload) {
      state.isUser = payload
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload
    },
    setSearchTerm(state, payload) {
      state.searchTerm = payload
    },
    setDialog(state, payload) {
      state.dialog = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  actions: {
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
          firestore.collection('users').doc(result.user.uid).set(userData)
          router.push('/')
        })
        .catch(() => {
          router.push('/')
        })
    },
    logout({ commit }) {
      firebaseauth
        .signOut()
        .then(() => {
          commit('setUser', null)
          commit('setIsUser', false)
          commit('setIsAuthenticated', false)
          router.push('/')
        })
        .catch(() => {
          commit('setUser', null)
          commit('setIsAuthenticated', false)
          router.push('/')
        })
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    },
    isUser(state) {
      return state.isUser
    },
    isDialog(state) {
      return state.dialog
    },
    isLoading(state){
      return state.loading
    }
  },
})
