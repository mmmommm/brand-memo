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
                  to='/MemoSearch'
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
              <LoginButton/>
              <!-- <div
                class='my-2'
              >
                <v-btn
                  to='/MemoRegister'
                  text
                  :x-large='$vuetify.breakpoint.smAndUp'
                  :small='$vuetify.breakpoint.xsOnly'
                >
                  Register
                </v-btn>
              </div> -->
              <v-spacer/>
              <v-text
                class="mt-5"
              >
                匿名
              </v-text>
            </template>
            <template
              v-if='isAuthenticated()'
            >
              <div
                class='my-2'
              >
                <v-btn
                  to='/MemoAdd'
                  text
                  :x-large='$vuetify.breakpoint.smAndUp'
                  :small='$vuetify.breakpoint.xsOnly'
                >
                  Add
                </v-btn>
              </div>
              <div
                class='my-2'
              >
                <v-btn
                  to='/MemoMypage'
                  text
                  :x-large='$vuetify.breakpoint.smAndUp'
                  :small='$vuetify.breakpoint.xsOnly'
                >
                  Mypage
                </v-btn>
              </div>
              <LogoutButton/>
              <v-spacer/>
              <v-text
                class="mt-5"
              >
                {{ name }}さん
              </v-text>
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
import LoginButton from '@/components/atoms/loginButton.vue';
import LogoutButton from '@/components/atoms/logoutButton.vue';
@Component({
  components: {
    LoginButton,
    LogoutButton
  }
})
export default class Header extends Vue {
  name = null as string | null
  isAuthenticated(): boolean {
    return this.$store.getters.isAuthenticated;
  }
  mounted() {
    firebaseauth.onAuthStateChanged((user) => {
      if(user) {
        this.$store.commit('setIsAuthenticated', this.isAuthenticated ? true : false);
        this.$store.commit('setUser', user.displayName)
        this.name = this.$store.state.user
      }
    })
  }
  googlelogin() {
    this.$store.dispatch('googleLogin')
  }
}
</script>