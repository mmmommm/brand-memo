<template>
    <v-img
      src='@/assets/login-photo.jpeg'
    >
    <div>
      <v-container>
        <v-layout
          justify-center
        >
          <LoginForm />
        </v-layout>
      </v-container>
    </div>
    </v-img>
</template>

<script lang='ts'>
import LoginForm from '../../components/organisms/loginForm.vue'
import { Component, Vue } from 'vue-property-decorator';
// import { firebaseauth } from '@/firebase/firebaseAuth';
@Component({
  components: {
    LoginForm
  }
})
export default class MemoLogin extends Vue {}
</script>