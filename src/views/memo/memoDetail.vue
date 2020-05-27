<template>
  <div>
    <!-- memoEditを押した時にmemoDetailもでてしまうので仕方なく -->
    <template v-if='!displayEdit'>
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
                <v-text-field
                  readonly
                  :value='date'
                />
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
                    readonly
                    :value='code'
                  />
                  <v-card-title>
                    銘柄名
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    readonly
                    :value='name'
                  />
                  <v-card-title>
                    時価総額
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    readonly
                    :value='capitalization'
                  />
                  <v-card-title>
                    浮動株式数
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    readonly
                    :value='floating'
                  />
                  <v-card-title>
                    テーマ
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    readonly
                    :value='theme'
                  />
                  <v-card-title>
                    株価
                  </v-card-title>
                  <v-text-field
                    type='text'
                    class='py-2'
                    readonly
                    :value='price'
                  />
                  <v-card-title>
                    会社URL
                  </v-card-title>
                  <v-btn
                    text
                    :href='url'
                    target='_blank'
                  >
                    {{ url }}
                  </v-btn>
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
                readonly
                outlined
              />
              <template
                v-if='isAuthenticated()'
              >
                <v-btn
                  type='submit'
                  x-large
                  class='ml-12 mb-4'
                  outlined
                  @click='displayEdit = true'
                  :to="{ name: 'MemoEdit', params: { memo: this.slug }}"
                >
                  Editmemo
                </v-btn>
                <v-dialog
                  v-model='dialog'
                  persistent
                  max-width='290'
                >
                  <template
                    v-slot:activator='{ on }'
                  >
                    <v-btn
                      text
                      v-on='on'
                      x-large
                      outlined
                      class="ml-12 mb-4"
                    >
                      Deletememo
                    </v-btn>
                  </template>
                    <v-card
                      width='290'
                      height='150'
                    >
                      <v-card-title>
                        本当に削除してよろしいですか？
                      </v-card-title>
                      <v-layout
                        justify-center
                      >
                        <v-card-actions
                          name='deletememo'
                        >
                          <v-spacer/>
                          <v-btn
                            @click='deleteMemo'
                            color='error'
                            :x-large='$vuetify.breakpoint.smAndUp'
                            :small='$vuetify.breakpoint.xsOnly'
                            text
                          >
                            はい
                          </v-btn>
                          <v-btn
                            @click='dialog = false'
                            color='indigo'
                            :x-large='$vuetify.breakpoint.smAndUp'
                            :small='$vuetify.breakpoint.xsOnly'
                            text
                          >
                            いいえ
                          </v-btn>
                        </v-card-actions>
                      </v-layout>
                    </v-card>
                </v-dialog>
              </template>
            </v-card>
          </v-flex>
        </Layout>
    </template>
    <router-view/>
  </div>
</template>
<script lang='ts'>
import { Watch, Component, Vue } from 'vue-property-decorator';
import { firestore } from '@/firebase/fireStore';
import { MemoItem } from '@/interface/memoItem';
import Layout from '@/components/atoms/layout.vue';
@Component({
  components: {
    Layout
  }
})
export default class MemoDetail extends Vue {
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
  dialog = false
  displayEdit = false
  beforeRouteEnter(to: any, from: string, next: any){
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
  isAuthenticated(): boolean {
    return this.$store.getters.isAuthenticated;
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
  deleteMemo() {
    firestore.collection('memos').doc(this.slug).delete()
    .then(() => {
      this.$router.push('/memoHome')
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
}
</script>