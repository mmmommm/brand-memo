<template>
  <v-btn
    @click='filteredList()'
    text
    outlined
    class='mt-2 filter'
  >
    検索
  </v-btn>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firestore } from '@/firebase/fireStore';
@Component
export default class SearchButton extends Vue {
  filteredData: Array<firebase.firestore.DocumentData> = []
  filteredList() {
    firestore.collection('memos').where('code', '==', this.$store.state.searchTerm).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.filteredData.push(doc.data())
        });
        this.$emit('catchData', this.filteredData)
      })
  }
}
</script>