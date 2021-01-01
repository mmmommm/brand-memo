<template>
  <v-text-field
    :value="value"
    readonly
    class="py-2"
    type="text"
  />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
type Props = {
  value: string;
}
export default defineComponent({
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  setup(props: Props) {
    props.value
  }
})
</script>