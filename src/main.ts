import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Firebase from '@/firebase/firebase';

import MemoHome from '@/views/memo/MemoHome.vue'
import MemoAdd from '@/views/memo/MemoAdd.vue'
import MemoDetail from '@/views/memo/MemoDetail.vue'
import MemoEdit from '@/views/memo/MemoEdit.vue'
import MemoSearch from '@/views/memo/MemoSearch.vue'
import MemoLogin from '@/views/user/MemoLogin.vue'
import MemoRegister from '@/views/user/MemoRegister.vue'

Firebase.init();

Vue.config.productionTip = false

Vue.component("memo-home", MemoHome);
Vue.component("memo-add", MemoAdd);
Vue.component("memo-detail", MemoDetail);
Vue.component("memo-edit", MemoEdit);
Vue.component("memo-search", MemoSearch);
Vue.component("memo-login", MemoLogin);
Vue.component("memo-register", MemoRegister);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
