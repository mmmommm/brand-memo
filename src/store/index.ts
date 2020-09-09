import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app'
import { firebaseauth } from '@/firebase/firebaseAuth';
import { firestore } from '@/firebase/fireStore';
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null as string | null,
    isUser: false,
    isAuthenticated: false,
    searchTerm: null as number | null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsUser(state, payload) {
      state.isUser = payload
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setSearchTerm(state, payload) {
      state.searchTerm = payload;
    }
  },
  actions: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebaseauth.signInWithPopup(provider)
        .then((result) => {
          if(result.user == null) return
          const userData = {
            id:  result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
          }
          console.log(userData)
          firestore.collection('users').doc(result.user.uid).set(userData)
          router.push('/')
        })
        .catch(() => {
          router.push('/')
        })
    },
    userLogout({ commit }) {
      firebaseauth
        .signOut()
        .then(() => {
          console.log('成功')
          commit('setUser', null);
          commit('setIsUser', false)
          commit('setIsAuthenticated', false);
          router.push('/')
        })
        .catch(() => {
          console.log('失敗')
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/')
        })
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    },
    isUser(state) {
      return state.isUser
    }
  }
});
