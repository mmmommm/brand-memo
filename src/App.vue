<template>
  <v-app>
    <Header/>
    <v-content>
      <transition name="fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
@Component({
  components: {
    Header,
  }
})
export default class App extends Vue {}
</script>