import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseauth } from '@/firebase/firebaseAuth';
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null as string | null,
    isAuthenticated: false,
    Token: "" as string | null
  },
  mutations: {
    setIdToken(state, payload) {
      state.Token = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {
    userLogin({ commit }, { email, password }) {
      firebaseauth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          commit('setIsAuthenticated', true);
          if(res.user !== null) {
            commit('setIdToken', res.user.getIdToken().toString());
          }
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
        .then(res => {
          commit('setIsAuthenticated', true);
          if (res.user !== null) {
            commit('setIdToken', res.user.getIdToken().toString());
          }
          router.push('/memoHome');
        })
        .catch(() => {
          commit('setIdToken', "");
          commit('setIsAuthenticated', false);
          router.push('memoRegister');
        });
    },
    userLogout({ commit }) {
      firebaseauth
        .signOut()
        .then(() => {
          commit('setIdToken', "");
          commit('setIsAuthenticated', false);
          router.push('/memoLogin');
          this.state.Token = ""
        })
        .catch(() => {
          commit('setIdToken', null);
          commit('setIsAuthenticated', false);
          router.push('/memoRegister');
        })
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    }
  }
});
