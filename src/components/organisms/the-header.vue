<template>
  <div>
    <v-app-bar
      app
      height="100"
    >
      <v-container>
        <v-layout>
          <v-flex row xs0 sm2 md2 lg4>
            <v-toolbar-title
              v-if="$vuetify.breakpoint.smAndUp"
              class="mt-4 headline text-uppercase"
            >
              <span> Trade brand memo </span>
            </v-toolbar-title>
          </v-flex>
          <v-flex row xs8 sm10 md10 lg8>
            <template>
              <BaseLink url="/">
                Home
              </BaseLink>
              <BaseLink url="/MemoSearch">
                Search
              </BaseLink>
            </template>
            <template v-if="!isAuthenticated()">
              <LoginButton />
            </template>
            <template v-if="isAuthenticated()">
              <BaseLink url="/MemoAdd">
                Add
              </BaseLink>
              <BaseLink url="/MemoMypage">
                Mypage
              </BaseLink>
              <LogoutButton />
            </template>
          </v-flex>
        </v-layout>
      </v-container>
      <div class="float-right mr-4">
        <template v-if="!isAuthenticated()">
          <v-text class="ml-4 align-center font-weight-thin">
            匿名
          </v-text>
        </template>
        <template v-if="isAuthenticated()">
          <v-text class="ml-4 align-center font-weight-thin">
            {{ this.$store.state.user }}
          </v-text>
        </template>
      </div>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firebaseauth } from '@/firebase/firebaseAuth'
import LoginButton from '@/components/molecules/the-header-login-button.vue'
import LogoutButton from '@/components/molecules/the-header-logout-button.vue'
import BaseLink from '@/components/atoms/base-link.vue'
@Component({
  components: {
    BaseLink,
    LoginButton,
    LogoutButton,
  },
})
export default class Header extends Vue {
  isAuthenticated(): boolean {
    return this.$store.getters.isAuthenticated
  }
  mounted() {
    firebaseauth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit(
          'setIsAuthenticated',
          this.isAuthenticated ? true : false
        )
        this.$store.commit('setUser', user.displayName)
      }
    })
  }
  googlelogin() {
    this.$store.dispatch('googleLogin')
  }
}
</script>
