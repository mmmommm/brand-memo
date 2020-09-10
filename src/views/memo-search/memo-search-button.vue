<template>
  <BaseButton class="mt-2 filter" @click="filteredList()"> 検索 </BaseButton>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firestore } from '@/firebase/fireStore'
import BaseButton from '@/components/atoms/base-button.vue'
@Component({
  components: {
    BaseButton,
  },
})
export default class SearchButton extends Vue {
  filteredData: Array<firebase.firestore.DocumentData> = []
  filteredList() {
    firestore
      .collection('memos')
      .where('code', '==', this.$store.state.searchTerm)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.filteredData.push(doc.data())
        })
        this.$emit('catchData', this.filteredData)
      })
  }
}
</script>
