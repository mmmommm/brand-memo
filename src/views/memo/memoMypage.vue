<template>
  <Layout>
    <template v-if="memos.length">
      <MemoCard
        v-for="(memo, index) in memos"
        :key="index"
        :memo='memo'
      />
    </template>
    <template v-else>
      <v-container>
      <v-layout align-center column justify-center fill-height>
        <h1 class="display-2 font-weight-thin my-12">
          まだメモがありません
        </h1>
        <h4 class="subheading mt-12">
          是非下記のボタンを押下しメモを作成してみてください。
        </h4>
        <v-btn
          outlined
          rounded
          to='/MemoAdd'
          class='mt-4'
        >
          メモを作成する
        </v-btn>
      </v-layout>
      </v-container>
    </template>
  </Layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { firestore } from '@/firebase/fireStore';
import { MemoItem } from '@/interface/memoItem';
import Layout from '@/components/atoms/layout.vue';
import MemoCard from '@/components/atoms/memoCard.vue';
@Component({
  components: {
    Layout,
    MemoCard
  }
})
export default class MemoMypage extends Vue {
  memos: MemoItem[] = []
  created() {
    firestore.collection('memos').where('author', '==', this.$store.state.user).get()
      .then((querySnapshot) => {
        const s: MemoItem[] = []
        querySnapshot.forEach((doc: any) => {
          s.push(doc.data())
        });
        this.memos = s
      })
  }
}
</script>