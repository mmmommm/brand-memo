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
export default defineComponent ({
  components: {
    ModalWindow,
  },
  setup(_, { root }) {
    const login = () => {
      root.$store.commit('setDialog', false)
      root.$store.dispatch('login')
    }
    const cancel = () => {
      root.$store.commit('setDialog', false)
    }
    return {
      login,
      cancel
    }
  }
})
</script>
