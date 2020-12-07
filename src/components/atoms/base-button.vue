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
import { defineComponent, SetupContext } from '@vue/composition-api'
export default defineComponent ({
  setup(props, context: SetupContext) {
    const click = () => {
      context.emit("click")
    }
    return {
      click
    }
  }
})
</script>
