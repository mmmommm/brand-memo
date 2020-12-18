<template>
  <ModalWindow
    @approve="deleteMemo"
    @cancel="cancel"
  >
    <template #buttonTitle>
      DeleteMemo ＜
    </template>
    <template #modalTitle>
      削除してよろしいですか？
    </template>
  </ModalWindow>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { firestore } from '@/firebase/fireStore'
import ModalWindow from '@/components/atoms/modal-window.vue'
export default defineComponent ({
  components: {
    ModalWindow,
  },
  props: {
    slug: {
      type: String,
      default: "",
      required: true,
    }
  },
  setup(props, { root }) {
    const deleteMemo = () => {
      root.$store.commit('setDialog', false)
      firestore
        .collection('memos')
        .doc(props.slug)
        .delete()
        .then(() => {
          root.$router.push('/MemoHome')
        })
    }
    const cancel = () => {
      root.$store.commit('setDialog', false)
    }
    return {
      deleteMemo,
      cancel
    }
  }
})
</script>
