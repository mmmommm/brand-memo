<template>
  <ModalWindow
    @approve="logout"
    @cancel="cancel"
  >
    <template #buttonTitle>
      Logout
    </template>
    <template #modalTitle>
      ログアウトしますか？
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
      logout() {
        dialog.setDialog
        user.logout
      },
      cancel() {
        dialog.setDialog
      }
    }
  }
})
</script>
