<template>
  <v-app>
    <v-container>
    <v-layout>
    <div class="index">
      <div class ="memo">
        <v-card width="600px">
          <v-layout>
            <v-card-title>日付</v-card-title>
            <v-card-title>{{ date }}</v-card-title>
          </v-layout>
          <v-layout>
            <v-flex class="ml-4" xs12 sm12 md12>
              <v-card-title>
                <p>コード</p>
                <p>{{ code }}</p>
                <p>銘柄名</p>
                <p>{{ name }}</p>
                <p>時価総額</p>
                <p>{{ capitalization }}</p>
                <p>浮動株式数</p>
                <p>{{ floating }}</p>
                <p>テーマ</p>
                <p>{{ theme }}</p>
                <p>株価</p>
                <p>{{ price }}</p>
                <p>会社URL</p>
                <p>{{ url }}</p>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card width="600px">
          <v-card-title>
            <p>理由</p>
          </v-card-title>
          <textarea v-model="reason" cols="60" rows="25" class="ml-4" readonly></textarea>
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
  @Watch('$route')
    fetchData() {
      firestore.collection('memos').where('slug', '==', this.$route.params.memo).get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
          this.capitalization = doc.data().capitalization
          this.code = doc.data().code
          this.date = doc.data().date
          this.floating = doc.data().floating
          this.name = doc.data().name
          this.price = doc.data().price
          this.reason = doc.data().reason
          this.theme = doc.data().theme
          this.url = doc.data().url
      })
    })
    }
  }
</script>

<style scoped>
.memo{
  display: flex;
}
</style>