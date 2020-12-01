<template>
  <div>
    <v-app-bar
      app
      height="100"
    >
      <v-container>
        <v-layout>
          <v-flex
            row
            xs0
            sm2
            md2
            lg4
          >
            <v-toolbar-title
              v-if="$vuetify.breakpoint.smAndUp"
              class="mt-4 headline text-uppercase"
            >
              <p> brand memo </p>
            </v-toolbar-title>
          </v-flex>
          <v-flex
            row
            xs8
            sm10
            md10
            lg8
          >
            <template>
              <BaseLink url="/">Home</BaseLink>
              <BaseLink url="/MemoSearch">Search</BaseLink>
            </template>
            <template v-if="!isAuthenticated()">
              <LoginButton />
            </template>
            <template v-if="isAuthenticated()">
              <BaseLink url="/MemoAdd">Add</BaseLink>
              <BaseLink url="/MemoMypage">Mypage</BaseLink>
              <LogoutButton />
            </template>
          </v-flex>
        </v-layout>
      </v-container>
      <div class="float-right mr-4">
        <template v-if="!isAuthenticated()">
          <v-text class="align-center font-weight-thin">匿名</v-text>
        </template>
        <template v-if="isAuthenticated()">
          <v-text class="align-center font-weight-thin">{{ user.user }}</v-text>
        </template>
      </div>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { firebaseauth } from '@/firebase/firebaseAuth'
import LoginButton from '@/components/molecules/the-header-login-button.vue'
import LogoutButton from '@/components/molecules/the-header-logout-button.vue'
import BaseLink from '@/components/atoms/base-link.vue'
export default defineComponent ({
  components: {
    BaseLink,
    LoginButton,
    LogoutButton
  },
  setup(props, { root }) {
    const isAuthenticated = () => {
      return root.$store.getters.isAuthenticated
    }
    onMounted(() => {
      firebaseauth.onAuthStateChanged((user) => {
        if (user === null) return
        else {
          console.log(user)
          root.$store.commit(
            'setIsAuthenticated',
            isAuthenticated() ? true : false
          )
          root.$store.commit('setUser', user.displayName)
        }
      })
    })
    return {
      isAuthenticated
    }
  },
})
</script>
