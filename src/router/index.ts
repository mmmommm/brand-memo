import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import memoAdd from "@/views/memoAdd.vue";
import memoHome from "@/views/memoHome.vue";
import memoLogin from "@/views/memoLogin.vue";
import memoRegister from "@/views/memoRegister.vue";
import memoEdit from "@/views/memoEdit.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'memo-login',
    component: memoLogin,
    // beforeEnter(to, from, next) {
    //   if (store.getters.idToken) {
    //     next('/memoHome');
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: '/memoAdd',
    name: 'memo-add',
    component: memoAdd,
    // beforeEnter(to, from, next) {
    //   if(store.getters.idToken) {
    //     next();
    //   } else {
    //     next('/');
    //   }
    // }
  },
  {
    path: '/memoHome',
    name: 'home',
    component: memoHome,
    // beforeEnter(to, from, next) {
    //   if (store.getters.idToken) {
    //     next();
    //   } else {
    //     next('/');
    //   }
    // }
  },
  {
    path: '/memoRegister',
    name: 'memo-register',
    component: memoRegister,
    // beforeEnter(to, from, next) {
    //   if (store.getters.idToken) {
    //     next('/memoHome');
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: '/memoEdit',
    name: 'memo-edit',
    component: memoEdit,
    // beforeEnter(to, from, next) {
    //   if (store.getters.idToken) {
    //     next();
    //   } else {
    //     next('/');
    //   }
    // }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
