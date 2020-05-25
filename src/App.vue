<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/organisms/Header.vue';
@Component({
  components: {
    Header,
  }
})
export default class App extends Vue {}
</script>