<template>
  <v-text-field
    :value="value"
    readonly
    class="py-2"
    type="number"
  />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
type Props = {
  value: number | Function;
}
export default defineComponent({
  props: {
    value: null
  },
  setup(props: Props) {
    props.value
  }
})
</script>