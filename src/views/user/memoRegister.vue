<template>
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
</template>

<script lang='ts'>
import RegisterForm from '../../components/organisms/RegisterForm.vue';
import { Component, Vue } from 'vue-property-decorator';
// import { firebaseauth } from '@/firebase/firebaseAuth';
@Component({
  components: {
    RegisterForm
  }
})
export default class MemoRegister extends Vue {}
</script>