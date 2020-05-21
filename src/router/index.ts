import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import memoAdd from '@/views/memo/memoAdd.vue';
import memoHome from '@/views/memo/memoHome.vue';
import memoLogin from '@/views/user/memoLogin.vue';
import memoRegister from '@/views/user/memoRegister.vue';
import memoEdit from '@/views/memo/memoEdit.vue';
import memoDetail from '@/views/memo/memoDetail.vue';
import memoSearch from '@/components/memoSearch.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/memoLogin',
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
  {
    path: '/memoSearch',
    component: memoSearch,
  },
  {
    path: '/:memo',
    name: 'memo-detail',
    component: memoDetail,
    children: [
      {
        path: '/edit',
        name: 'memo-edit',
        component: memoEdit
      }
    ]
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
