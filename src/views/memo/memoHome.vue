
<template>
  <Layout>
    <MemoCard
      v-for='(memo, index) in memoLists'
      :key='index'
      :memo='memo'
    />
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
import Layout from '@/components/atoms/layout.vue';
import MemoCard from '@/components/atoms/memoCard.vue';
@Component({
  components: {
    Layout,
    MemoCard
  }
})
export default class MemoHome extends Vue {
  readonly page = 1
  readonly pageSize = 9
  memos: Array<firebase.firestore.DocumentData>  = []
  memoLists: Array<firebase.firestore.DocumentData> = []
  //開いた時にfirestoreからmemoデータを取ってくる
  created() {
    //全部のデータを取ってしまっているので必要なcodeとnameだけとりたい
    firestore.collection('memos').get().then((querySnapshot) => {
      const array: Array<firebase.firestore.DocumentData> = [];
      querySnapshot.forEach((doc) => {
        array.push(doc.data())
      });
        this.memos = array
        //pageSizeに分けて取得する
        this.memoLists = this.memos.slice(0, this.pageSize)
    });
  }
  pageChange() {
    //pageの番号に合わせてmemooListsに入るmemoを変更する
    this.memoLists = this.memos.slice(this.pageSize*(this.page -1), this.pageSize*(this.page))
  }
}
</script>