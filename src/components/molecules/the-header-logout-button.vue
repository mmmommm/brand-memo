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
export default defineComponent ({
  components: {
    ModalWindow,
  },
  setup(_, { root }) {
    const logout = () => {
      root.$store.commit('setDialog', false)
      root.$store.dispatch('logout')
    }
    const cancel = () => {
      root.$store.commit('setDialog', false)
    }
    return {
      logout,
      cancel
    }
  }
})
</script>
