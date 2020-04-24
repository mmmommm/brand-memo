<template>
  <v-app>
    <v-container>
    <v-layout>
    <div class="index">
      <div class ="memo">
        <v-card width="600px">
          <v-layout>
            <v-card-title>日付</v-card-title>
            <input v-model="date" type="text" placeholder="2020/04/01">
          </v-layout>
          <v-layout>
            <v-flex class="ml-4">
              <v-card-title>銘柄名</v-card-title>
              <v-card-title>{{ date }}</v-card-title>
              <v-card-title>時価総額</v-card-title>
              <input v-model.number="capitalization" type="number">
              <v-card-title>浮動株式数</v-card-title>
              <input v-model.number="floating" type="number">
              <v-card-title>テーマ</v-card-title>
              <input v-model="theme">
              <v-card-title>株価</v-card-title>
              <input v-model.number="price" type="number">
              <v-card-title>会社URL</v-card-title>
              <input v-model="url">
            </v-flex>
          </v-layout>
        </v-card>
        <v-card width="600px">
          <v-card-title>理由</v-card-title>
          <textarea v-model="reason" cols="60" rows="25" class="ml-4" placeholder="なぜこの株を選んだのか"></textarea>
          <br>
          <v-btn type="submit" x-large class="ml-12">Addmemo</v-btn>
        </v-card>
      </div>
    </div>
    </v-layout>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { Watch, Component, Vue } from 'vue-property-decorator';
import { firestore } from "@/firebase/fireStore";
import { MemoItem } from '@/interface/memoItem';
@Component
export default class MemoDetail extends Vue {
  public memos: MemoItem[] = []
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
  beforeRouteEnter(to: any, from: any, next: any){
    firestore.collection('memos').where('slug', '==', to.params.memo).get().then((querySnapshot) =>{
      querySnapshot.forEach((doc) =>{
        next((vm: any) => {
          vm.capitalization = doc.data().capitalization
          vm.code = doc.data().code
          vm.date = doc.data().date
          vm.floating = doc.data().floating
          vm.name = doc.data().name
          vm.price = doc.data().price
          vm.reason = doc.data().reason
          vm.theme = doc.data().theme
          vm.url = doc.data().url
        })
      })
    })
  }
  // fetchData(){
  //   firestore.collection('memos').where('slug', '==', this.$route.params.memo).get().then((querySnapshot)=>{
  //     querySnapshot.forEach((doc)=>{
  //       // eslint-disable-next-line no-console
  //       console.log(doc.id, '==', doc.data())
  //         this.capitalization = doc.data().capitalization
  //         this.code = doc.data().code
  //         this.date = doc.data().date
  //         this.floating = doc.data().floating
  //         this.name = doc.data().name
  //         this.price = doc.data().price
  //         this.reason = doc.data().reason
  //         this.theme = doc.data().theme
  //         this.url = doc.data().url
  //     })
  //   })
  // }
}
</script>

<style scoped>
.memo{
  display: flex;
}
</style>