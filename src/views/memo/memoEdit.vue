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
            md5
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
                      :value='date'
                    />
                  </template>
                  <v-date-picker
                    v-model='date'
                    no-title
                    @input='menu = false'
                  />
                </v-menu>
              </v-layout>
              <v-layout
                wrap
              >
                <v-flex
                  class='ml-4'
                >
                  <v-card-title>
                    コード
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='code'
                    v-model="code"
                    :rules='codeRules'
                  />
                  <v-card-title>
                    銘柄名
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='name'
                    v-model="name"
                    :rules='nameRules'
                  />
                  <v-card-title>
                    時価総額
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='capitalization'
                    v-model="capitalization"
                    :rules='capitalizationRules'
                  />
                  <v-card-title>
                    浮動株式数
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='floating'
                    v-model="floating"
                    :rules='floatRules'
                  />
                  <v-card-title>
                    テーマ
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='theme'
                    v-model="theme"
                    :rules='themeRules'
                  />
                  <v-card-title>
                    株価
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='price'
                    v-model="price"
                    :rules='priceRules'
                  />
                  <v-card-title>
                    会社URL
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='url'
                    v-model="url"
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
                <p
                  class='ml-2'
                >
                  理由
                </p>
              </v-card-title>
              <v-textarea
                :value='reason'
                v-model="reason"
                cols='60'
                rows='25'
                class='ml-4'
                outlined
                :rules='reasonRules'
              />
              <v-btn
                type='submit'
                x-large
                class='ml-12 mb-4'
                outlined
                @click='updateMemo()'
                :disabled='!valid'
              >
                updatememo
              </v-btn>
            </v-card>
          </v-flex>
        </Layout>
    </v-form>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { firestore } from '@/firebase/fireStore';
import Layout from '@/components/atoms/layout.vue';
import * as rules from '@/config/user/rules';
interface VForm extends Vue {
  validate(): boolean;
}
@Component({
  components: {
    Layout
  }
})
export default class MemoEdit extends Vue {
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
  created() {
    firestore.collection('memos').where('slug', '==', this.$route.params.memo).get().then((querySnapshot) =>{
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
        this.slug = doc.data().slug
      })
    })
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
  updateMemo() {
    if(this.$refs.form.validate()) {
      firestore.collection('memos').doc().update({
        capitalization: this.capitalization,
        code: this.code,
        date: this.date,
        floating: this.floating,
        name: this.name,
        price: this.price,
        reason: this.reason,
        theme: this.theme,
        url: this.url
      })
      .then(() => {
        this.$router.push({path: '/'})
        console.log('成功')
      })
      .catch(() => {
        console.log('失敗')
      })
    }
  }
}
</script>