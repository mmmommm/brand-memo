<template>
  <pageNotFound/>
</template>
<script lang="ts">
import pageNotFound from '@/components/organisms/page-not-found.vue'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  components: {
    pageNotFound
  }
})
</script>