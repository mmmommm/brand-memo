<template>
  <v-container>
    <v-layout>
      <v-text-field
        v-model.number='search_term'
        placeholder='search brand by code (ex 9984'
        class='term'
        @keydown.enter='filteredList'
      />
      <v-btn
        @click='filteredList()'
        text
        outlined
        class='mt-2 filter'
      >
        検索
      </v-btn>
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
import { firestore } from '@/firebase/fireStore';
import { MemoItem } from '@/interface/memoItem';
import Layout from '@/components/atoms/layout.vue';
import * as rules from '@/config/user/rules';
@Component({
  components: {
    Layout,
  }
})
export default class MemoSearch extends Vue {
search_term: number | null = null
code: number | null = 0
name: string | null = ''
memos: MemoItem[] = []
filteredMemo: MemoItem[] = []

get codeRules() { return rules.codeRules }
// filteredList: MemoItem[] = []
// codeList: (number | null)[] = []
  // created() {
  //   // eslint-disable-next-line
  //   firestore.collection('memos').get().then((querySnapshot: any) => {
  //     const array: MemoItem[] = [];
  //     // eslint-disable-next-line
  //     querySnapshot.forEach((doc: any) => {
  //       array.push(doc.data())
  //     });
  //       this.memos = array
  //       // arrayにぶちこまれてるmemosからそれぞれのmemoのcodeの値を取りだしてcodeListに入れる
  //     // array.forEach((s) => {
  //     //   this.codeList.push(s.code)
  //     // })
  //   });
  // }
  filteredList() {
    firestore.collection('memos').where('code', '==', this.search_term).get()
    .then((querySnapshot) => {
      const s: MemoItem[] = []
      querySnapshot.forEach((doc: any) => {
        s.push(doc.data())
      });
      this.filteredMemo = s
    })
    //  return this.memos.filter(t => {
    //   this.search_term === this.memos. ?
    //  })
  }
}
</script>