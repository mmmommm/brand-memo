import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import memoAdd from "@/views/memoAdd.vue";
import memoHome from "@/views/memoHome.vue";
import memoLogin from "@/views/memoLogin.vue";
import memoRegister from "@/views/memoRegister.vue";
import memoEdit from "@/views/memoEdit.vue";
import memoDetail from '@/views/memoDetail.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
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
    component: memoRegister,
    // beforeEnter(to, from, next) {
    //   if (store.getters.idToken) {
    //     next('/memoHome');
    //   } else {
    //     next();
    //   }
    // }
  },
  // {
  //   path: '/:memo/edit',
  //   name: 'memo-edit',
  //   component: memoEdit,
  //   // beforeEnter(to, from, next) {
  //   //   if (store.getters.idToken) {
  //   //     next();
  //   //   } else {
  //   //     next('/');
  //   //   }
  //   // }
  // },
  {
    path: '/:memo',
    name: 'memo-detail',
    component: memoDetail,
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
    redirect: '/memoHome'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
