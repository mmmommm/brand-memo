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
@Component
export default class SearchButton extends Vue {}
</script>