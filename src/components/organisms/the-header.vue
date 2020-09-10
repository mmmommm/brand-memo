<template>
  <div>
    <v-app-bar app height="100" class="py-2">
      <v-container>
        <v-layout>
          <v-flex row xs0 sm4 md4>
            <v-toolbar-title
              v-if="$vuetify.breakpoint.smAndUp"
              class="mt-5 headline text-uppercase"
            >
              <span> Trade brand memo </span>
            </v-toolbar-title>
          </v-flex>
          <v-flex row xs12 sm10 md8>
            <template>
              <BaseLink url="/">Home</BaseLink>
              <BaseLink url="/MemoSearch">Search</BaseLink>
            </template>
            <template v-if="!isAuthenticated()">
              <LoginButton />
              <p class="ml-4 mt-5">匿名</p>
            </template>
            <template v-if="isAuthenticated()">
              <BaseLink url="/MemoAdd">Add</BaseLink>
              <BaseLink url="/MemoMypage">Mypage</BaseLink>
              <LogoutButton />
              <p class="ml-4 mt-5">{{ this.$store.state.user }}さん</p>
            </template>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firebaseauth } from '@/firebase/firebaseAuth'
import LoginButton from '@/components/molecules/login-button.vue'
import LogoutButton from '@/components/molecules/logout-button.vue'
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
