<template>
  <v-app>
    <v-img
      src='@/assets/login-photo.jpeg'
    >
    <div>
      <v-container>
        <v-layout
          justify-center
        >
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
        </v-layout>
      </v-container>
    </div>
    </v-img>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { firebaseauth } from '@/firebase/firebaseAuth';
@Component
export default class MemoLogin extends Vue {
  email = ''
  password = ''
  // eslint-disable-next-line
  emailRules: any = [
    // eslint-disable-next-line
    (v: any) => !!v || 'E-mail is required',
    // eslint-disable-next-line
    (v: any) => /.+@.+/.test(v) || 'E-mail must be valid',
  ];
  // eslint-disable-next-line
  passwordRules: any = [
    // eslint-disable-next-line
    (v: any) => !!v || 'Password is required',
    // eslint-disable-next-line
    (v: any) => (v && v.length >= 6) || 'Password must be more than 6 characters',
  ]
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
<style scoped>
.signin {
  border-radius: 20%;
}
</style>