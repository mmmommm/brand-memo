<template>
  <v-btn
    text
    outlined
    @click='click'
  >
    <slot></slot>
  </v-btn>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
@Component
export default class BaseButton extends Vue {
  @Emit()
  click() { return }
}
</script>