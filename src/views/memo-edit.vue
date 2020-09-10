<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <Layout>
      <v-flex xs12 sm12 md5>
        <v-card :width="cardWidth()" flat>
          <v-layout>
            <v-card-title> 日付 </v-card-title>
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
                  class="mt-4 ml-4"
                  :value="date"
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="date" no-title @input="menu = false" />
            </v-menu>
          </v-layout>
          <v-layout wrap>
            <v-flex class="ml-4">
              <v-card-title> コード </v-card-title>
              <v-text-field
                v-model="code"
                type="text"
                class="py-2"
                :value="code"
                :rules="codeRules"
              />
              <v-card-title> 銘柄名 </v-card-title>
              <v-text-field
                v-model="name"
                type="text"
                class="py-2"
                :value="name"
                :rules="nameRules"
              />
              <v-card-title> 時価総額 </v-card-title>
              <v-text-field
                v-model="capitalization"
                type="text"
                class="py-2"
                :value="capitalization"
                :rules="capitalizationRules"
              />
              <v-card-title> 浮動株式数 </v-card-title>
              <v-text-field
                v-model="floating"
                type="text"
                class="py-2"
                :value="floating"
                :rules="floatRules"
              />
              <v-card-title> テーマ </v-card-title>
              <v-text-field
                v-model="theme"
                type="text"
                class="py-2"
                :value="theme"
                :rules="themeRules"
              />
              <v-card-title> 株価 </v-card-title>
              <v-text-field
                v-model="price"
                type="text"
                class="py-2"
                :value="price"
                :rules="priceRules"
              />
              <v-card-title> 会社URL </v-card-title>
              <v-text-field
                v-model="url"
                type="text"
                class="py-2"
                :value="url"
                :rules="urlRules"
              />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <v-card :width="cardWidth()" flat>
          <v-card-title>
            <p class="ml-2">理由</p>
          </v-card-title>
          <v-textarea
            v-model="reason"
            :value="reason"
            cols="60"
            rows="25"
            class="ml-4"
            outlined
            :rules="reasonRules"
          />
          <v-btn
            type="button"
            x-large
            class="ml-12 mb-4"
            outlined
            :disabled="!valid"
            @click="updateMemo()"
          >
            updatememo
          </v-btn>
        </v-card>
      </v-flex>
    </Layout>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firestore } from '@/firebase/fireStore'
import Layout from '@/components/atoms/layout.vue'
import * as rules from '@/config/rules'
interface VForm extends Vue {
  validate(): boolean
}
@Component({
  components: {
    Layout,
  },
})
export default class MemoEdit extends Vue {
  author = ''
  capitalization: number | null = null
  code: number | null = null
  date: string | null = null
  floating: number | null = null
  name: string | null = null
  price: number | null = null
  reason: string | null = null
  theme: string | null = null
  url: string | null = null
  slug: string | undefined = ''
  valid = true
  menu = false
  $refs!: {
    form: VForm
  }

  get codeRules() {
    return rules.codeRules
  }
  get nameRules() {
    return rules.nameRules
  }
  get capitalizationRules() {
    return rules.capitalizationRules
  }
  get floatRules() {
    return rules.floatRules
  }
  get themeRules() {
    return rules.themeRules
  }
  get priceRules() {
    return rules.priceRules
  }
  get urlRules() {
    return rules.urlRules
  }
  get reasonRules() {
    return rules.reasonRules
  }

  created() {
    firestore
      .collection('memos')
      .where('slug', '==', this.$route.params.memo)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.author = doc.data().author
          this.capitalization = doc.data().capitalization
          this.code = doc.data().code
          this.date = doc.data().date
          this.floating = doc.data().floating
          this.name = doc.data().name
          this.price = doc.data().price
          this.reason = doc.data().reason
          this.theme = doc.data().theme
          this.url = doc.data().url
          this.slug = doc.data().slug
        })
      })
  }

  cardWidth(): number {
    const name = this.$vuetify.breakpoint.name
    if (name == 'xs') {
      return 350
    } else if (name == 'sm') {
      return 350
    } else if (name == 'md') {
      return 600
    } else if (name == 'lg') {
      return 600
    } else {
      return 600
    }
  }

  updateMemo() {
    console.log(this.slug)
    firestore
      .collection('memos')
      .doc(this.slug)
      .update({
        capitalization: this.capitalization,
        code: this.code,
        date: this.date,
        floating: this.floating,
        name: this.name,
        price: this.price,
        reason: this.reason,
        theme: this.theme,
        url: this.url,
      })
      .then(() => {
        this.$router.push('/')
      })
      .catch(() => {
        alert('エラーが発生しました、少し時間をおいて再実行してください。')
        this.$router.push('/MemoMyPage')
      })
  }
}
</script>
