<template>
  <v-app>
    <LoadingScreen v-show="loading" />
    <Layout v-show="!loading">
      <template v-if="memos.length">
        <MemoCard
          v-for="(memo, index) in memos"
          :key="index"
          :memo="memo"
        />
      </template>
      <template v-else>
        <v-container>
          <v-layout
            align-center
            column
            justify-center
            fill-height
          >
            <h1 class="display-2 font-weight-thin my-12">
              まだメモがありません
            </h1>
            <h4 class="subheading mt-12">
              是非下記のボタンを押下しメモを作成してみてください。
            </h4>
            <v-btn
              outlined
              rounded
              to="/MemoAdd"
              class="mt-4"
            >
              メモを作成する
            </v-btn>
          </v-layout>
        </v-container>
      </template>
    </Layout>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firestore } from '@/firebase/fireStore'
import LoadingScreen from '@/components/organisms/loading-screen.vue'
import Layout from '@/components/atoms/base-layout.vue'
import MemoCard from '@/components/organisms/memo-card.vue'
@Component({
  components: {
    LoadingScreen,
    Layout,
    MemoCard,
  },
})
export default class MemoMypage extends Vue {
  loading = false
  memos: Array<firebase.firestore.DocumentData> = []

  created() {
    this.loading = true
    this.fetchMemo()
  }

  async fetchMemo() {
    await firestore
      .collection('memos')
      .where('author', '==', this.$store.state.user)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.memos.push(doc.data())
        })
      })
    this.loading = false
  }
}
</script>
