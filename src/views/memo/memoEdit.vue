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
                  />
                  <v-card-title>
                    銘柄名
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='name'
                  />
                  <v-card-title>
                    時価総額
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='capitalization'
                  />
                  <v-card-title>
                    浮動株式数
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='floating'
                  />
                  <v-card-title>
                    テーマ
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='theme'
                  />
                  <v-card-title>
                    株価
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='price'
                  />
                  <v-card-title>
                    会社URL
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    :value='url'
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
                cols='60'
                rows='25'
                class='ml-4'
                outlined
              />
              <v-btn
                type='submit'
                x-large
                class='ml-12 mb-4'
                outlined
                @click='updateMemo()'
                :disabled='valid'
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
  beforeRouteEnter(to: any, from: any, next: any){
    firestore.collection('memos').where('slug', '==', to.params.memo).get().then((querySnapshot) =>{
      querySnapshot.forEach((doc) =>{
        next(() => {
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
    })
  }
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
      firestore.collection('memos').doc(this.slug).update({
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
        this.$router.go(-1)
      })
    }
  }
}
</script>