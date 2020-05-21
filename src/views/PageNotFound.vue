<template>
  <pageNotFound/>
</template>
<script lang="ts">
import pageNotFound from '@/components/organisms/page-not-found.vue'
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    pageNotFound
  }
})
export default class PageNotFound extends Vue {}
</script>