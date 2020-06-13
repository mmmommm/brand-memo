
<template>
  <!-- <v-img src='@/assets/portfolio.jpg' height='1000'> -->
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
                  class='button ml-2 mt-6'
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
          @input = "pageChange"
        />
      </Layout>
  <!-- </v-img> -->
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { firestore } from '@/firebase/fireStore';
import { MemoItem } from '@/interface/memoItem';
import Layout from '@/components/atoms/layout.vue';
@Component({
  components: {
    Layout
  }
})
export default class MemoHome extends Vue {
  page = 1
  pageSize = 3
  memos: MemoItem[] = []
  memoLists: MemoItem[] = []
  created() {
    // eslint-disable-next-line
    firestore.collection('memos').get().then((querySnapshot: any) => {
      const array: MemoItem[] = [];
      // eslint-disable-next-line
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
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>