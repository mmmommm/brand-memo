<template>
  <BaseButton
    class="mt-2 filter"
    @click="filteredList"
  >
    検索
  </BaseButton>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { firestore } from '@/firebase/fireStore'
import BaseButton from '@/components/atoms/base-button.vue'
import firebase from '@firebase/firestore-types'
export default defineComponent ({
  components: {
    BaseButton,
  },
  setup(_, { emit, root }) {
    const filteredData: firebase.DocumentData[] = []
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
