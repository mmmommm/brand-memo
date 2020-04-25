<template>
<v-app>
  <form @submit.prevent="saveMemo">
  <v-container>
    <v-layout>
      <div class="memo">
        <v-card width="600px">
          <v-layout>
            <v-card-title>日付</v-card-title>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  v-on="on"
                  class="mt-4 ml-4"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu = false"></v-date-picker>
            </v-menu>
          </v-layout>
          <v-layout>
            <v-flex class="ml-4">
              <v-card-title>コード</v-card-title>
              <input v-model="code" type="text" placeholder="7203" class="py-2">
              <v-card-title>銘柄名</v-card-title>
              <input v-model="name" type="text" placeholder="トヨタ自動車" class="py-2">
              <v-card-title>時価総額</v-card-title>
              <input v-model.number="capitalization" type="number" class="py-2">
              <v-card-title>浮動株式数</v-card-title>
              <input v-model.number="floating" type="number" class="py-2">
              <v-card-title>テーマ</v-card-title>
              <input v-model="theme" placeholder="自動運転" class="py-2">
              <v-card-title>株価</v-card-title>
              <input v-model.number="price" type="number" placeholder="6500" class="py-2">
              <v-card-title>会社URL</v-card-title>
              <input v-model="url" placeholder="https://company.co.jp" class="py-2">
            </v-flex>
          </v-layout>
        </v-card>
        <v-card width="600px">
          <v-card-title>理由</v-card-title>
          <textarea v-model="reason" cols="60" rows="25" class="ml-4" placeholder="この会社はどのような会社か、投資をするに値するか、業績等からみてどうか。"></textarea>
          <v-btn type="submit" x-large class="ml-12 mt-12" outlined>Addmemo</v-btn>
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
export default class MemoAdd extends Vue {
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