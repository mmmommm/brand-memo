
<template>
  <Layout>
      <v-flex
        xs12
        sm6
        md4
        v-for='(memo, index) in memoLists'
        :key='index'
      >
        <v-card
          width='350'
          height='200'
          class='my-5'
        >
          <v-card-title
            class='ml-2 code'
          >
            {{ memo.code }}
          </v-card-title>
          <v-card-title
            class='ml-2 name'
          >
            {{ memo.name }}
          </v-card-title>
          <v-card-text>
            <v-layout>
              <v-btn
                outlined
                class='ml-2 mt-6'
                :to="{ name: 'MemoDetail', params: { memo: memo.slug }}"
              >
                viewmemo
              </v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    <v-pagination
      v-model="page"
      class="my-4"
      :length="2"
      :total-visible="3"
      color="black"
      @input = "pageChange"
    />
  </Layout>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { firestore } from '@/firebase/fireStore';
import { MemoHomeItem } from '@/interface/memoHomeItem';
import Layout from '@/components/atoms/layout.vue';
@Component({
  components: {
    Layout
  }
})
export default class MemoHome extends Vue {
  page = 1
  pageSize = 3
  memos: MemoHomeItem[] = []
  memoLists: MemoHomeItem[] = []
  created() {
    //全部のデータを取ってしまっているので必要なcodeとnameだけとりたい
    firestore.collection('memos').get().then((querySnapshot: any) => {
      const array: MemoHomeItem[] = [];
      querySnapshot.forEach((doc: any) => {
        array.push(doc.data())
      });
        this.memos = array
        this.memoLists = this.memos.slice(0, this.pageSize)
    });
  }
  pageChange() {
    this.memoLists = this.memos.slice(this.pageSize*(this.page -1), this.pageSize*(this.page))
  }
}
</script>