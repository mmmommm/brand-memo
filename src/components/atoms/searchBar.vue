<template>
  <v-text-field
    v-model.number='searchTerm'
    placeholder='search brand by code (ex 9984'
    class='term'
    :rules='codeRules'
    @input="inputTerm"
    @keydown.enter="filteredList"
  />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MemoItem } from '@/interface/memoItem';
import { firestore } from '@/firebase/fireStore';
import * as rules from '@/config/user/rules';
@Component
export default class SearchBar extends Vue {
searchTerm: number | null = null
filteredData: MemoItem[] = []
get codeRules() { return rules.codeRules }
filteredList() {
  firestore.collection('memos').where('code', '==', this.$store.state.searchTerm).get()
    .then((querySnapshot) => {
      const s: MemoItem[] = []
      querySnapshot.forEach((doc: any) => {
        s.push(doc.data())
      });
      this.filteredData = s
      this.$emit('catchData', this.filteredData)
    })
  }
inputTerm() {
  this.$store.commit('setSearchTerm', this.searchTerm)
}
}
</script>