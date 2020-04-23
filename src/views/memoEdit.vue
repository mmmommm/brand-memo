<template>
<v-app>
  <form>
  <v-container>
    <v-layout>
      <div class="memo">
            <v-card width="600px">
              <v-layout>
                <v-card-title>日付</v-card-title>
                <input v-model="date" type="text" placeholder="2020/04/01">
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code" type="text" placeholder="コード/銘柄名">
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
              </v-layout>
            </v-card>
            <v-card width="600px">
              <v-card-title>感想・反省</v-card-title>
              <textarea v-model="reason" cols="60" rows="25" class="ml-4" placeholder="なぜこの株を選んだのか"></textarea>
              <br>
              <v-btn type="submit" x-large class="ml-12">Addmemo</v-btn>
            </v-card>
      </div>
    </v-layout>
  </v-container>
  </form>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { firestore } from "@/firebase/fireStore";
@Component
export default class MemoEdit extends Vue {
  capitalization: number | null = 0
  code: string | null = ""
  date: string | null = ""
  floating: number | null = 0
  price: number | null = null
  reason: string | null = ""
  theme: string | null = ""
  url: string | null = ""
  saveMemo(){
    const slug = this.generateUUID()
    firestore.collection('memos').add({
      slug: slug
    })
      this.$router.push({path: "/"})
  }
  generateUUID () {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  });
    return uuid;
  }
}

</script>
<style scoped>
.memo{
  display: flex;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>