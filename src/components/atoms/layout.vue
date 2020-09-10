<template>
  <v-container>
    <v-layout wrap>
      <slot />
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Layout extends Vue {}
</script>
