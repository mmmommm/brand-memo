<template>
  <BaseButton
    class="mt-2 filter"
    @click="filteredList"
  >
    検索
  </BaseButton>
</template>
<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import { firestore } from '@/firebase/fireStore'
import BaseButton from '@/components/atoms/base-button.vue'
export default defineComponent ({
  components: {
    BaseButton,
  },
  setup(props, { emit, root }) {
    const filteredData: any[] = []
    const filteredList = () => {
      firestore
      .collection('memos')
      .where('code', '==', root.$store.state.searchTerm)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          filteredData.push(doc.data())
        })
        emit('catchData', filteredData)
      })
    }
    return {
      filteredList
    }
  }
})
</script>
