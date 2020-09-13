<template>
  <div class="mx-2 my-2">
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
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class BaseLink extends Vue {
  @Prop()
  url!: string
}
</script>
