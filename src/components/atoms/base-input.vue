<template>
  <v-text-field
    class="py-2"
    type="text"
    :v-model="input"
    :rules="rules"
    :value="value"
    :placeholder="placeholder"
  />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
type Props = {
  input?: string | number;
  rules?: string | Function;
  value?: string | number;
  placeholder?: string;
}
export default defineComponent({
  props: {
    input: {
      type: [String, Number],
      default: "",
    },
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
    props.input
    props.rules
    props.value
    props.placeholder
  }
})
</script>