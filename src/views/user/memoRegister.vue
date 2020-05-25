<template>
  <v-app>
    <v-img
      src='@/assets/register-photo.jpeg'
    >
    <div>
      <v-container>
        <v-layout
          justify-center
        >
          <RegisterForm/>
        </v-layout>
      </v-container>
    </div>
    </v-img>
  </v-app>
</template>

<script lang='ts'>
import RegisterForm from '@/components/organisms/RegisterForm.vue';
import { Component, Vue } from 'vue-property-decorator';
// import { firebaseauth } from '@/firebase/firebaseAuth';
@Component({
  components: {
    RegisterForm
  }
})
export default class MemoLogin extends Vue {}
</script>