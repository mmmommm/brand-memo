<template>
  <v-img src="@/assets/portfolio.jpg" height="1000">
    <v-container>
      <v-layout wrap>
        <v-flex xs12 sm6 md4 v-for="(memo, index) in memos" :key="index">
          <v-card width="350" height="200" class="my-5">
            <v-card-title class="ml-2">{{ memo.code }}</v-card-title>
            <v-card-title class="ml-2">{{ memo.name }}</v-card-title>
            <v-card-text>
              <v-layout>
                <v-btn outlined class="button ml-2 mt-6" :to="{ name: 'memo-detail', params: { memo: memo.slug }}">viewmemo</v-btn>
                <!-- <v-btn outlined class="button ml-12 mt-6">deletememo</v-btn> -->
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { firestore } from "@/firebase/fireStore";
import { MemoItem } from '@/interface/memoItem';
@Component
export default class MemoHome extends Vue {
  capitalization: number | null = 0
  code: number | null = 0
  date = new Date().toISOString().substr(0, 10)
  floating: number | null = 0
  name: string | null = ""
  price: number | null = null
  reason: string | null = ""
  theme: string | null = ""
  url: string | null = ""
  menu = false
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