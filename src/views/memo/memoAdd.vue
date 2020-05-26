<template>
  <v-form
    ref='form'
    v-model='valid'
    lazy-validation
  >
    <Layout>
          <v-flex
            xs12
            sm12
            md6
          >
            <v-card
              :width='cardWidth'
              flat
            >
              <v-layout>
                <v-card-title>
                  日付
                </v-card-title>
                <v-menu
                  ref='menu'
                  v-model='menu'
                  :close-on-content-click='false'
                  transition='scale-transition'
                  offset-y
                  max-width='290'
                >
                  <template
                    v-slot:activator='{ on }'
                  >
                    <v-text-field
                      v-model='date'
                      v-on='on'
                      class='mt-4 ml-4'
                    />
                  </template>
                  <v-date-picker
                    v-model='date'
                    no-title
                    @input='menu = false'
                  />
                </v-menu>
              </v-layout>
              <v-layout>
                <v-flex
                  class='ml-4'
                >
                  <v-card-title>
                    コード
                  </v-card-title>
                  <v-text-field
                    v-model.number='code'
                    type='number'
                    placeholder='7203'
                    class='py-2'
                    :rules='codeRules'
                  />
                  <v-card-title>
                    銘柄名
                  </v-card-title>
                  <v-text-field
                    v-model='name'
                    type='text'
                    placeholder='トヨタ自動車'
                    class='py-2'
                    :rules='nameRules'
                  />
                  <v-card-title>
                    時価総額（百万）
                  </v-card-title>
                  <v-text-field
                    v-model.number='capitalization'
                    placeholder='21495773'
                    type='number'
                    class='py-2'
                    :rules='capitalizationRules'
                  />
                  <v-card-title>
                    浮動株式数（株）
                  </v-card-title>
                  <v-text-field
                    v-model.number='floating'
                    placeholder='1000000000'
                    type='number'
                    class='py-2'
                    :rules='floatRules'
                  />
                  <v-card-title>
                    テーマ
                  </v-card-title>
                  <v-text-field
                    v-model='theme'
                    type='text'
                    placeholder='自動運転'
                    class='py-2'
                    :rules='themeRules'
                  />
                  <v-card-title>
                    株価（円）
                  </v-card-title>
                  <v-text-field
                    v-model.number='price'
                    type='number'
                    placeholder='6500'
                    class='py-2'
                    :rules='priceRules'
                  />
                  <v-card-title>
                    会社URL
                  </v-card-title>
                  <v-text-field
                    v-model='url'
                    text
                    placeholder='https://company.co.jp'
                    class='py-2'
                    :rules='urlRules'
                  />
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex
            xs12
            sm12
            md6
          >
            <v-card
              :width='cardWidth'
              flat
            >
              <v-card-title>
                理由
              </v-card-title>
              <v-textarea
                v-model='reason'
                cols='60'
                rows='25'
                outlined
                placeholder='この会社はどのような会社か、投資をするに値するか、業績等からみてどうか。'
                :rules='reasonRules'
              />
              <v-btn
                type='submit'
                x-large
                class='ml-12 my-12 add'
                outlined
                @click='saveMemo'
                :disabled='!valid'
              >
                Addmemo
              </v-btn>
            </v-card>
          </v-flex>
      </Layout>
  </v-form>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { firestore } from '@/firebase/fireStore';
import * as rules from '@/config/user/rules';
import Layout from '@/components/atoms/layout.vue';
interface VForm extends Vue {
  validate(): boolean;
}
@Component({
  components: {
    Layout
  }
})
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
  valid = true
  $refs!: {
    form: VForm;
  }
  get codeRules() { return rules.codeRules }
  get nameRules() { return rules.nameRules }
  get capitalizationRules() { return rules.capitalizationRules }
  get floatRules() { return rules.floatRules }
  get themeRules() { return rules.themeRules }
  get priceRules() { return rules.priceRules }
  get urlRules() { return rules.urlRules }
  get reasonRules() { return rules.reasonRules }
  saveMemo() {
    if(this.$refs.form.validate()) {
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