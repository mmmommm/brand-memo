<template>
  <v-text-field
    class="py-2"
    type="number"
    :rules="rules"
    :value="value"
    :placeholder="placeholder"
  />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
type Props = {
  rules: Array<string | Function>;
  value: number;
  placeholder: string;
}
export default defineComponent({
  props: {
    rules: {
      type: null,
      default: null,
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props: Props) {
    props.rules
    props.value
    props.placeholder
  }
})
</script>