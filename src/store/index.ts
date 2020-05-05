import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseauth } from '@/firebase/firebaseAuth';
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null as string | null,
    isAuthenticated: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {
    userLogin({ commit }, { email, password }) {
      firebaseauth
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/memoHome');
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
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/memoHome');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('memoRegister');
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
          router.push('/memoLogin')
        })
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  }
});
