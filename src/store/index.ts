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
    isAuthenticated: false,
    searchTerm: null as number | null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setSearchTerm(state, payload) {
      state.searchTerm = payload;
    }
  },
  actions: {
    googleLogin({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebaseauth.signInWithPopup(provider)
        .then((result: any) => {
          const userData = {
            id: result.user.uid,
            name: result.additionalUserInfo.profile.given_name,
            email: result.additionalUserInfo.profile.email,
          }
          console.log(userData)
          firestore.collection('users').doc(result.user.uid).set(userData)
          commit('setIsAuthenticated', true)
          router.push('/')
        })
        .catch(() => {
          router.push('/memoLogin')
        })
    },
    userLogin({ commit }, { email, password }) {
      firebaseauth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/memoLogin')
        });
    },
    userRegister({ commit }, { email, password }) {
      firebaseauth
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          const userData = {
            email: user.additionalUserInfo
          }
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/memoRegister');
        });
    },
    userLogout({ commit }) {
      firebaseauth
        .signOut()
        .then(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/memoLogin')
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/memoRegister')
        })
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    }
  }
});
