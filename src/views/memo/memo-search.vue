<template>
  <v-container>
    <v-layout>
      <!-- filteredMemo[]を取得 -->
      <SearchBar
        @catchData="passData"
      />
      <SearchButton
        @catchData="passData"
      />
    </v-layout>
    <v-layout
      wrap
    >
      <MemoCard
        v-for='(memo, index) in filteredMemo'
        :key='index'
        :memo='memo'
      />
    </v-layout>
  </v-container>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { MemoItem } from '@/interface/memoItem';
import Layout from '@/components/atoms/layout.vue';
import SearchBar from '@/components/atoms/search-bar.vue';
import SearchButton from '@/components/molecules/search-button.vue';
import MemoCard from '@/components/atoms/memo-card.vue';
@Component({
  components: {
    Layout,
    SearchBar,
    SearchButton,
    MemoCard
  }
})
export default class MemoSearch extends Vue {
filteredMemo: MemoItem[] = []
passData(filteredData: MemoItem[]) {
  this.filteredMemo = filteredData
}
}
</script>