<template>
  <v-container>
    <v-layout>
      <v-text-field v-model.number="hint" placeholder="search brand by code"/>
      <v-btn @click.prevent="filteredList()">検索</v-btn>
    </v-layout>
    <v-layout wrap>
        <v-flex xs12 sm6 md4 v-for="(memo, index) in filteredList" :key="index">
          <v-card width="350" height="200" class="my-5">
            <v-card-title class="ml-2">{{ memo.code }}</v-card-title>
            <v-card-title class="ml-2">{{ memo.name }}</v-card-title>
            <v-card-text>
              <v-layout>
                <v-btn outlined class="button ml-2 mt-6" :to="{ name: 'memo-detail', params: { memo: memo.slug }}">viewmemo</v-btn>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firestore } from '@/firebase/fireStore';
import { MemoItem } from '@/interface/memoItem';
@Component
export default class MemoSearch extends Vue {
hint: number | null = null
code: number | null = 0
name: string | null = ""
search = 0
memos: MemoItem[] = []
  created() {
    // eslint-disable-next-line
    firestore.collection('memos').get().then((querySnapshot: any) => {
      const array: MemoItem[] = [];
      // eslint-disable-next-line
      querySnapshot.forEach((doc: any) => {
        array.push(doc.data())
      });
        this.memos = array
    });
  }
  filteredList(): MemoItem[] | null {
    if (!this.hint) return null;
     return this.memos.filter(memo => {
      memo.code.includes(this.search)
     })
  }
}
</script>