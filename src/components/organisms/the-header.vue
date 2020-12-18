<template>
  <div>
    <v-app-bar
      app
      :height="headerHeight"
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
              class="mt-4 headline text-uppercase"
            >
              <p> brand memo </p>
            </v-toolbar-title>
          </v-flex>
          <v-flex
            v-if="$vuetify.breakpoint.smAndUp"
            row
            xs8
            sm10
            md10
            lg8
          >
            <template>
              <BaseLink url="/MemoHome">
                Home
              </BaseLink>
              <BaseLink url="/MemoSearch">
                Search
              </BaseLink>
            </template>
            <template v-if="!isAuthenticated">
              <LoginButton />
            </template>
            <template v-if="isAuthenticated">
              <BaseLink url="/MemoAdd">
                Add
              </BaseLink>
              <BaseLink url="/MemoMypage">
                Mypage
              </BaseLink>
              <LogoutButton />
            </template>
          </v-flex>
          <v-app-bar-nav-icon
            v-if="$vuetify.breakpoint.xsOnly"
            @click="isDrawer"
          />
        </v-layout>
      </v-container>
      <div
        v-if="$vuetify.breakpoint.smAndUp"
        class="float-right mr-4"
      >
        <template v-if="!isAuthenticated">
          <v-text class="align-center font-weight-thin">
            匿名
          </v-text>
        </template>
        <template v-if="isAuthenticated">
          <v-text class="align-center font-weight-thin">
            {{ user }}
          </v-text>
        </template>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.xsOnly"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="text--accent-4"
        >
          <v-list-item href="/">
            Home
          </v-list-item>
          <v-list-item href="/MemoSearch">
            Search
          </v-list-item>
          <template v-if="!isAuthenticated">
            <LoginButton />
          </template>
          <template v-if="isAuthenticated">
            <v-list-item href="/MemoAdd">
              Add
            </v-list-item>
            <v-list-item href="/MemoMypage">
              Mypage
            </v-list-item>
            <LogoutButton />
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import LoginButton from '@/components/molecules/the-header-login-button.vue'
import LogoutButton from '@/components/molecules/the-header-logout-button.vue'
import BaseLink from '@/components/atoms/base-link.vue'
import HeaderModule from '@/modules/header/method'
import { HeaderHeight } from '@/modules/common'
export default defineComponent ({
  components: {
    BaseLink,
    LoginButton,
    LogoutButton
  },
  setup(_, context) {
    const headerModule = HeaderModule(context)
    const headerHeight = HeaderHeight(context)
    headerModule.setUser()
    return {
      headerHeight,
      ...headerModule
    }
  },
})
</script>
