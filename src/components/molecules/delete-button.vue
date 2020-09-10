<template>
  <ModalWindow @approve="deleteMemo" @cancel="cancel">
    <template #buttonTitle>DeleteMemo</template>
    <template #modalTitle>本当に削除してよろしいですか？</template>
  </ModalWindow>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { firestore } from '@/firebase/fireStore'
import ModalWindow from '@/components/atoms/modal-window.vue'
@Component({
  components: {
    ModalWindow
  }
})
export default class DeleteButton extends Vue {
  @Prop({ default: '' })
  slug!: string
  deleteMemo() {
    this.$store.commit('setDialog', false)
    firestore.collection('memos').doc(this.slug).delete()
    .then(() => {
      this.$router.push('/')
    })
  }
  cancel() {
    this.$store.commit('setDialog', false)
  }
}
</script>