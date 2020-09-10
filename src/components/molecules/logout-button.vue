<template>
  <ModalWindow @approve="logout" @cancel="cancel">
    <template #buttonTitle>Logout</template>
    <template #modalTitle>本当にログアウトしてよろしいですか？</template>
  </ModalWindow>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ModalWindow from '@/components/atoms/modal-window.vue'
@Component({
  components: {
    ModalWindow
  }
})
export default class LogoutButton extends Vue {
  logout() {
    this.$store.commit('setDialog', false)
    this.$store.dispatch('userLogout')
  }
  cancel() {
    this.$store.commit('setDialog', false)
  }
}
</script>