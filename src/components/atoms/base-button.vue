<template>
  <v-btn
    text
    outlined
    @click="click"
  >
    <slot />
  </v-btn>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent ({
  setup() {
    const click = () => {
      return
    }
  }
})
</script>
