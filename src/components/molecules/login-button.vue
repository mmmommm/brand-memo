<template>
  <ModalWindow @approve="login" @cancel="cancel">
    <template #buttonTitle>Login</template>
    <template #modalTitle>Google認証に遷移します</template>
  </ModalWindow>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ModalWindow from '@/components/atoms/modal-window.vue'
@Component({
  components: {
    ModalWindow,
  },
})
export default class LoginButton extends Vue {
  login() {
    this.$store.commit('setDialog', false)
    this.$store.dispatch('login')
  }
  cancel() {
    this.$store.commit('setDialog', false)
  }
}
</script>
