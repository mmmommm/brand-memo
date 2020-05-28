<template>
  <v-text-field
    v-model.number='search_term'
    placeholder='search brand by code (ex 9984'
    class='term'
    :rules='codeRules'
    @keydown.enter='submit()'
  />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as rules from '@/config/user/rules';
@Component
export default class SearchBar extends Vue {
search_term: number | null = null
get codeRules() { return rules.codeRules }
submit() {
  this.$emit('filter', this.search_term)
}
}
</script>