<template>
  <Layout>
    <MemoCard
      v-for="(memo, index) in memos"
      :key="index"
      :memo='memo'
    />
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