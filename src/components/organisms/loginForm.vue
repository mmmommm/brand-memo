<template>
  <v-card
    shaped
    raised
    outlined
    width='800px'
    height='600px'
    class='mt-12'
  >
    <v-layout
      justify-center
    >
      <v-card-title
        class='font-weight-bold my-8 headline'
      >
        LOG IN
      </v-card-title>
    </v-layout>
    <v-form>
      <v-card-subtitle
        class='title ml-12'
      >
        Email
      </v-card-subtitle>
      <v-text-field
        class='px-12'
        type='email'
        v-model='email'
        label='Email'
        :rules='emailRules'
        required
        outlined
        rounded
      />
      <v-card-subtitle
        class='title ml-12'
      >
        Password
      </v-card-subtitle>
      <v-text-field
        class='px-12'
        type='password'
        v-model='password'
        label='Password'
        :rules='passwordRules'
        required
        outlined
        rounded
      />
    </v-form>
    <br>
    <br>
    <v-layout
      justify-center
    >
      <v-btn
        outlined
        rounded
        x-large
        @click='login'
      >
        log in
      </v-btn>
    </v-layout>
  </v-card>
</template>
<script lang="ts">
import * as rules from '@/config/user/rules'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class LoginForm extends Vue {
  // @Prop({required: true})
  // public login!: (email: string, password: string) => Promise<void>

  email = ''
  password = ''

  get emailRules() {
    return rules.emailRules
  }
  get passwordRules() {
    return rules.passwordRules
  }
  login() {
    this.$store.dispatch('userLogin', {
      email: this.email,
      password: this.password
    })
    // firebaseauth
    //   .signInWithEmailAndPassword(this.email, this.password)
    //   .then(() => {
    //     //成功したらホームにリダイレクト
    //     this.$router.push('/memoHome');
    //   })
  }
}
</script>