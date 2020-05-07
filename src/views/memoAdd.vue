<template>
<v-app>
  <form @submit.prevent='saveMemo'>
  <v-container>
    <v-layout wrap>
        <v-flex xs12 sm12 md6>
          <v-card :width='cardWidth' flat>
            <v-layout>
              <v-card-title>日付</v-card-title>
              <v-menu
                ref='menu'
                v-model='menu'
                :close-on-content-click='false'
                transition='scale-transition'
                offset-y
                max-width='290'
              >
                <template v-slot:activator='{ on }'>
                  <v-text-field
                    v-model='date'
                    v-on='on'
                    class='mt-4 ml-4'
                  ></v-text-field>
                </template>
                <v-date-picker v-model='date' no-title @input='menu = false'></v-date-picker>
              </v-menu>
            </v-layout>
            <v-layout>
              <v-flex class='ml-4'>
                <v-card-title>コード</v-card-title>
                <v-text-field v-model.number='code' type='number' placeholder='7203' class='py-2'/>
                <v-card-title>銘柄名</v-card-title>
                <v-text-field v-model='name' type='text' placeholder='トヨタ自動車' class='py-2'/>
                <v-card-title>時価総額（百万）</v-card-title>
                <v-text-field v-model.number='capitalization' placeholder='21495773' type='number' class='py-2'/>
                <v-card-title>浮動株式数（株）</v-card-title>
                <v-text-field v-model.number='floating' placeholder='1000000000' type='number' class='py-2'/>
                <v-card-title>テーマ</v-card-title>
                <v-text-field v-model='theme' type='text' placeholder='自動運転' class='py-2'/>
                <v-card-title>株価（円）</v-card-title>
                <v-text-field v-model.number='price' type='number' placeholder='6500' class='py-2'/>
                <v-card-title>会社URL</v-card-title>
                <v-text-field v-model='url' text placeholder='https://company.co.jp' class='py-2'/>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md6>
          <v-card :width='cardWidth' flat>
            <v-card-title>理由</v-card-title>
            <v-textarea v-model='reason' cols='60' rows='25' outlined placeholder='この会社はどのような会社か、投資をするに値するか、業績等からみてどうか。'/>
            <v-btn type='submit' x-large class='ml-12 my-12' outlined>Addmemo</v-btn>
          </v-card>
        </v-flex>
    </v-layout>
  </v-container>
  </form>
  </v-app>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { firestore } from '@/firebase/fireStore';
@Component
export default class MemoAdd extends Vue {
  capitalization: number | null = null
  code: number | null = null
  date: Date | null = null
  floating: number | null = null
  name: string | null = ''
  price: number | null = null
  reason: string | null = ''
  theme: string | null = ''
  url: string | null = ''
  menu = false
  saveMemo() {
    const slug = this.generateUUID()
    firestore.collection('memos').add({
      capitalization: this.capitalization,
      code: this.code,
      date: this.date,
      floating: this.floating,
      name: this.name,
      price: this.price,
      reason: this.reason,
      theme: this.theme,
      url: this.url,
      slug: slug
    })
      this.$router.push({path: '/memoHome'})
  }
  generateUUID(): string {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  });
    return uuid;
  }
  cardWidth() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return 350;
      case 'sm':
        return 350;
      case 'md':
        return 600;
      case 'lg':
        return 600;
      case 'xl':
        return 600;
    }
  }
}
</script>