import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MemoAdd from '@/views/memo/memoAdd.vue';
import MemoHome from '@/views/memo/memoHome.vue';
import MemoLogin from '@/views/user/memoLogin.vue';
import MemoRegister from '@/views/user/memoRegister.vue';
import MemoEdit from '@/views/memo/memoEdit.vue';
import MemoDetail from '@/views/memo/memoDetail.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import MemoSearch from '@/views/memo/memoSearch.vue';
import store from '@/store/index';

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  //共通で表示するもの
  {
    path: "/MemoHome",
    name: "MemoHome",
    component: MemoHome
  },
  {
    path: "/MemoSearch",
    name: "Memosearch",
    component: MemoSearch
  },
  //ログインしているとガードするもの
  {
    path: "/MemoLogin",
    name: "MemoLogin",
    component: MemoLogin,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        store.getters.isAuthenticated = true;
        next("/MemoHome");
      } else {
        next();
      }
    }
  },
  {
    path: "/MemoRegister",
    name: "MemoRegister",
    component: MemoRegister,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        store.getters.isAuthenticated = true;
        next("/MemoHome");
      } else {
        next();
      }
    }
  },
  //ログインしていないとガードするもの
  {
    path: "/MemoAdd",
    name: "MemoAdd",
    component: MemoAdd,
    meta: { requiresAuth: true }
  },
  //MemoDetailは非ログインでも観れるがedit画面は不可
  {
    path: "/:Memo",
    name: "MemoDetail",
    component: MemoDetail,
    children: [
      {
        path: "/edit",
        name: "MemoEdit",
        component: MemoEdit,
        meta: { requiresAuth: true }
      }
    ]
  },
  //上の動的ルーティングに吸われてリダイレクトが機能しない
  {
    path: "*",
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.isAuthenticated) {
      store.getters.isAuthenticated = false
      next({
        path: '/MemoLogin', query: { redirect: to.fullPath }
      });
    } else {
      next()
    }
  } else {
    next();
  }
});

export default router
