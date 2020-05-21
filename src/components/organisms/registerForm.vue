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
        REGISTER
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
        @click='register'
      >
        register
      </v-btn>
    </v-layout>
  </v-card>
</template>
<script lang='ts'>
import * as rules from '@/config/user/rules';
import { Component, Vue } from 'vue-property-decorator';
import { firebaseauth } from '@/firebase/firebaseAuth';
@Component
export default class RegisterForm extends Vue {
  email = ''
  password = ''

  get emailRules() {
    return rules.emailRules
  }
  get passwordRules() {
    return rules.passwordRules
  }
  register() {
    this.$store.dispatch('userRegister', {
      email: this.email,
      password: this.password
    })
    // firebaseauth
    // .createUserWithEmailAndPassword(this.email, this.password)
    // .then(() => {
    // //成功したらemailとpasswordを空に
    // this.$router.push('/memoHome');
    // })
  }
}
</script>