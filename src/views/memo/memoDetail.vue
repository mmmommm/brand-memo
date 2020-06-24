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
                v-if='isUser()'
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
                <DeleteButton
                  :slug='slug'
                />
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
import DeleteButton from '@/components/atoms/deleteButton.vue';
@Component({
  components: {
    Layout,
    DeleteButton
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
  author: string | null = null
  dialog = false
  displayEdit = false
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
        this.author = doc.data().author
      })
    })
    .then(() => {
      //ログインしていない時に両方ともnullになり通過してしまうため追加
      if(this.$store.state.user == this.author && this.$store.state.user != null) {
        this.$store.commit('setIsUser', true)
      } else {
        this.$store.commit('setIsUser', false)
      }
    })
  }
  isUser() {
    return this.$store.getters.isUser;
  }
  cardWidth(){
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
      default:
        return
    }
  }
}
</script>