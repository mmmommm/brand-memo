import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import memoAdd from '@/views/memo/memoAdd.vue';
import memoHome from '@/views/memo/memoHome.vue';
import memoLogin from '@/views/user/memoLogin.vue';
import memoRegister from '@/views/user/memoRegister.vue';
import memoEdit from '@/views/memo/memoEdit.vue';
import memoDetail from '@/views/memo/memoDetail.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import memoSearch from '@/views/memo/memoSearch.vue';
import store from 'vuex'

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  //共通で表示するもの
  {
    path: '/memoHome',
    component: memoHome,
  },
  {
    path: '/memoSearch',
    component: memoSearch,
  },
  //ログインしていないとガードするもの
  {
    path: '/memoLogin',
    component: memoLogin,
    meta: { requiresAuth: true }
  },
  {
    path: '/memoAdd',
    component: memoAdd,
    meta: { requiresAuth: true }
    // beforeEnter(to, from, next) {
    //   if(store.getters.idToken) {
    //     next();
    //   } else {
    //     next('/');
    //   }
    // }
  },
  {
    path: '/memoRegister',
    component: memoRegister,
    meta: { requiresAuth: true }
    // beforeEnter(to, from, next) {
    //   if (store.getters.idToken) {
    //     next('/memoHome');
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: '/:memo',
    name: 'memo-detail',
    component: memoDetail,
    meta: { requiresAuth: true },
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
  //上の動的ルーティングに吸われてリダイレクトが機能しない
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.isAuthenticated) {
      next({
        path: '/memoLogin', query: { redirect: to.fullPath }
      });
    } else {
      next()
    }
  } else {
    next();
  }
});

export default router
