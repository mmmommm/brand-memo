<template>
  <v-container>
    <v-layout>
      <!-- filteredMemo[]を取得 -->
      <SearchBar @catchData="passData" />
      <SearchButton @catchData="passData" />
    </v-layout>
    <v-layout wrap>
      <MemoCard
        v-for="(memo, index) in filteredMemo"
        :key="index"
        :memo="memo"
      />
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { MemoItem } from '@/interface/memoItem'
import Layout from '@/components/atoms/base-layout.vue'
import SearchBar from '@/components/molecules/memo-search-bar.vue'
import SearchButton from '@/components/molecules/memo-search-button.vue'
import MemoCard from '@/components/molecules/memo-card.vue'
export default defineComponent ({
  components: {
    Layout,
    SearchBar,
    SearchButton,
    MemoCard
  },
  setup() {
    let filteredMemo: MemoItem[] = []
    const passData = (filteredData: MemoItem[]) => {
      filteredMemo = filteredData
    }
    return {
      filteredMemo,
      passData
    }
  }
})
</script>
