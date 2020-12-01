<template>
  <v-text-field
    v-model.number="searchTerm"
    placeholder="search brand by code (ex 9984"
    class="term"
    :rules="codeRules"
    counter="4"
    height="50"
    @input="inputTerm"
    @keydown.enter="filteredList"
  />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { firestore } from '@/firebase/fireStore'
import * as rules from '@/config/rules'
export default defineComponent ({
  setup(props, { root }) {
    const searchTerm: number | null = null
    const filteredData: any[] = []
    const codeRules = () => { return rules.codeRules }
    const filteredList = () => {
      firestore
        .collection('memos')
        .where('code', '==', root.$store.state.searchTerm)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            filteredData.push(doc.data())
          })
          root.$emit('catchData', filteredData)
        })
    }
    const inputTerm = () => {
      root.$store.commit('setSearchTerm', searchTerm)
    }
    return {
      searchTerm,
      codeRules,
      filteredData,
      filteredList,
      inputTerm
    }
  }
})
</script>
