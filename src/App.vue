<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Header from '@/components/organisms/the-header.vue'
export default defineComponent ({
  components: {
    Header,
  }
})
</script>
