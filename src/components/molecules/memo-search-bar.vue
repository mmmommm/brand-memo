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
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { firestore } from '@/firebase/fireStore'
import * as rules from '@/config/rules'
export default defineComponent ({
  setup(props, { emit, root }) {
    const state = reactive({
      searchTerm: null as null | number,
      filteredData: [] as any[],
    })
    const codeRules = () => { return rules.codeRules }
    const filteredList = () => {
      firestore
        .collection('memos')
        .where('code', '==', root.$store.state.searchTerm)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            state.filteredData.push(doc.data())
          })
          emit('catchData', state.filteredData)
        })
    }
    const inputTerm = () => {
      root.$store.commit('setSearchTerm', state.searchTerm)
    }
    return {
      ...toRefs(state),
      codeRules,
      filteredList,
      inputTerm
    }
  }
})
</script>
