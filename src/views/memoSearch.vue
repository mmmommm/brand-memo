<template>
  <v-container>
    <v-layout>
      <v-text-field v-model.number="hint" placeholder="銘柄コードを半角数字で入力してください  例[9984]"/>
    </v-layout>
    <v-layout>
      <template>

      </template>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class MemoSearch extends Vue {
hint: number | null = null
}
</script>