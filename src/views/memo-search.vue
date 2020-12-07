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
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
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
    const state = reactive({
      filteredMemo: [] as any[]
    })
    const passData = (filteredData: any[]) => {
      state.filteredMemo = filteredData
    }
    return {
      ...toRefs(state),
      passData
    }
  }
})
</script>
