<template>
  <v-container>
    <v-layout>
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
      <v-flex
        xs12
        sm6
        md4
        v-for='(memo, index) in filteredMemo'
        :key='index'
      >
        <v-card
          width='350'
          height='200'
          class='my-5'
        >
          <v-card-title
            class='ml-2'
          >
            {{ memo.code }}
          </v-card-title>
          <v-card-title
            class='ml-2'
          >
            {{ memo.name }}
          </v-card-title>
          <v-card-text>
            <v-layout>
              <v-btn
                outlined
                class='ml-2'
                :to="{ name: 'MemoDetail', params: { memo: memo.slug }}"
              >
                viewmemo
              </v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { MemoItem } from '@/interface/memoItem';
import Layout from '@/components/atoms/layout.vue';
import SearchBar from '@/components/atoms/searchBar.vue';
import SearchButton from '@/components/atoms/searchButton.vue';
@Component({
  components: {
    Layout,
    SearchBar,
    SearchButton,
  }
})
export default class MemoSearch extends Vue {
searchTerm: number | null = null
code: number | null = 0
name: string | null = ''
filteredMemo: MemoItem[] = []
passData(filteredData: MemoItem[]) {
  this.filteredMemo = filteredData
}
}
</script>