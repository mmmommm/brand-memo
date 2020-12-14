<template>
  <div>
    <div class="fullview">
      <div class="loading-spacer" />
      <vue-loading
        type="cylon"
        color="#33CCCC"
        :size="{ width: '100px', height: '100px' }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { VueLoading } from 'vue-loading-template'
export default defineComponent ({
  components: {
    VueLoading
  }
})
</script>

<style scoped>
.fullview {
  width: 100%;
  height: 100%;
  background: #fefefe;
  position: fixed;
  top: 0;
  left: 0;
}
.loading-spacer {
  height: 30%;
}
</style>
