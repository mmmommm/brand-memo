<template>
  <div>
    <v-btn
      text
      :to="url"
      :x-large="$vuetify.breakpoint.smAndUp"
      :small="$vuetify.breakpoint.xsOnly"
    >
      <slot />
    </v-btn>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
type Props = {
  url: string;
};
export default defineComponent ({
  props: {
    url: {
      type: String,
      default: "",
      required: true,
    }
  },
  setup(props: Props) {
    props.url
  }
})
</script>
