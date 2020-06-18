<template>
  <div>
    <v-app-bar
      app
    >
      <v-container>
        <v-layout>
          <v-flex
            row
            xs0
            sm4
            md6
          >
            <v-toolbar-title
              class='mt-5 headline text-uppercase'
              v-if='$vuetify.breakpoint.smAndUp'
            >
              <span>
                Trade brand memo
              </span>
            </v-toolbar-title>
          </v-flex>
          <v-spacer/>
          <v-flex
            row
            xs12
            sm10
            md8
          >
            <template>
              <div
                class='my-2'
              >
                <v-btn
                  to='/'
                  text
                  :x-large='$vuetify.breakpoint.smAndUp'
                  :small='$vuetify.breakpoint.xsOnly'
                  >
                  Home
                </v-btn>
              </div>
              <div
                class='my-2'
              >
                <v-btn
                  to='/memoSearch'
                  text
                  :x-large='$vuetify.breakpoint.smAndUp'
                  :small='$vuetify.breakpoint.xsOnly'
                >
                  Search
                </v-btn>
              </div>
            </template>
            <template
              v-if='!isAuthenticated()'
            >
              <div
                class='my-2'
              >
                <v-btn
                  to='/memoLogin'
                  text
                  :x-large='$vuetify.breakpoint.smAndUp'
                  :small='$vuetify.breakpoint.xsOnly'
                >
                  Login
                </v-btn>
              </div>
              <div
                class='my-2'
              >
                <v-btn
                  to='/memoRegister'
                  text
                  :x-large='$vuetify.breakpoint.smAndUp'
                  :small='$vuetify.breakpoint.xsOnly'
                >
                  Register
                </v-btn>
              </div>
            </template>
            <template
              v-if='isAuthenticated()'
            >
              <div
                class='my-2'
              >
                <v-btn
                  to='/memoAdd'
                  text
                  :x-large='$vuetify.breakpoint.smAndUp'
                  :small='$vuetify.breakpoint.xsOnly'
                >
                  Add
                </v-btn>
              </div>
              <LogoutButton/>
            </template>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { firebaseauth } from '@/firebase/firebaseAuth';
import LogoutButton from '@/components/atoms/logoutButton.vue';
@Component({
  components: {
    LogoutButton,
  }
})
export default class Header extends Vue {
  isAuthenticated(): boolean {
    return this.$store.getters.isAuthenticated;
  }
  created() {
    firebaseauth.onAuthStateChanged(user => {
      user = user ? user : null;
      this.$store.commit('setUser', user)
      this.$store.commit('setIsAuthenticated', this.isAuthenticated ? true : false);
    });
  }
}
</script>