<template>
  <div>
    <v-app-bar app>
      <v-container>
        <v-layout wrap>
          <v-flex row xs12 sm6 md6>
            <v-toolbar-title class="mt-5 headline text-uppercase">
              <span>Trade brand memo</span>
            </v-toolbar-title>
          </v-flex>
          <v-spacer/>
          <v-flex row xs12 sm6 md6>
            <template>
              <div class="my-2">
                <v-btn to="/memoHome" text x-large>Home</v-btn>
              </div>
              <div class="my-2">
                <v-btn text x-large>Search</v-btn>
              </div>
              <div class="my-2">
                <v-btn to="/memoAdd" text x-large>Add</v-btn>
              </div>
              <!-- <div class="my-2">
                <v-btn to="/" text x-large>logout</v-btn>
              </div> -->
            </template>
            <template>
              <div class="my-2">
                <v-btn to="/" text x-large>Login</v-btn>
              </div>
              <div class="my-2">
                <v-btn to="/memoRegister" text x-large>Register</v-btn>
              </div>
            </template>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Header extends Vue {}
</script>