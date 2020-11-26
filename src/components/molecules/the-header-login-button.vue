<template>
  <ModalWindow
    @approve="login"
    @cancel="cancel"
  >
    <template #buttonTitle>
      Login
    </template>
    <template #modalTitle>
      Google認証に遷移します
    </template>
  </ModalWindow>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ModalWindow from '@/components/atoms/modal-window.vue'
import userStore from '@/stores/user'
import dialogStore from '@/stores/dialog'
export default defineComponent ({
  components: {
    ModalWindow,
  },
  setup() {
    const user = userStore()
    const dialog = dialogStore()
    return {
      login() {
        dialog.setDialog
        user.login
      },
      cancel() {
        dialog.setDialog
      }
    }
  }
})
</script>
