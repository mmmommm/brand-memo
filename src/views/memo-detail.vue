<template>
  <div>
    <LoadingScreen v-show="isLoading" />
    <Layout v-show="!isLoading">
      <!-- memoEditを押した時にmemoDetailもでてしまうので仕方なく -->
      <template v-if="!display">
        <v-flex
          xs12
          sm12
          md5
        >
          <v-card
            :width="cardWidth"
            flat
          >
            <v-layout>
              <v-card-title> 日付 </v-card-title>
              <BaseText :value="date" />
            </v-layout>
            <v-layout wrap>
              <v-flex class="ml-4">
                <v-card-text> コード </v-card-text>
                <BaseNumber :value="code" />
                <v-card-text> 銘柄名 </v-card-text>
                <BaseText :value="name" />
                <v-card-text> 時価総額 </v-card-text>
                <BaseNumber :value="capitalization" />
                <v-card-text> 浮動株式数 </v-card-text>
                <BaseNumber :value="floating" />
                <v-card-text> テーマ </v-card-text>
                <BaseText :value="theme" />
                <v-card-text> 株価 </v-card-text>
                <BaseNumber :value="price" />
                <v-card-text> 会社URL </v-card-text>
                <v-btn
                  text
                  :href="url"
                  target="_blank"
                  rel="noopener"
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
            :width="cardWidth"
            flat
          >
            <v-card-title>
              <p class="ml-2">
                理由
              </p>
            </v-card-title>
            <v-textarea
              :value="reason"
              cols="60"
              rows="30"
              class="ml-4"
              readonly
              outlined
            />
            <template v-if="isUser">
              <v-layout>
                <v-flex
                  xs12
                  sm12
                  md6
                >
                  <v-btn
                    type="submit"
                    x-large
                    text
                    class="ml-n16 my-2"
                    @click="displayEdit"
                  >
                    Editmemo ＜
                  </v-btn>
                </v-flex>
                <v-flex
                  xs12
                  sm12
                  md6
                >
                  <DeleteButton :slug="slug" />
                </v-flex>
              </v-layout>
            </template>
          </v-card>
        </v-flex>
      </template>
    </Layout>
    <template v-if="display">
      <MemoEdit :slug="slug" />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Layout from '@/components/atoms/base-layout.vue'
import LoadingScreen from '@/components/atoms/loading-screen.vue'
import DeleteButton from '@/components/molecules/memo-detail-delete-button.vue'
import BaseText from '@/components/atoms/base-text.vue'
import { CardWidth } from '@/modules/common'
import DetailModule from '@/modules/detail/method'
import MemoEdit from '@/views/memo-edit.vue'
export default defineComponent ({
  components: {
    Layout,
    DeleteButton,
    BaseText,
    LoadingScreen,
    MemoEdit
  },
  setup(_, context) {
    const detailModule = DetailModule(context)
    const cardWidth = CardWidth(context)

    //created
    detailModule.detailInit()
    return {
      ...detailModule,
      cardWidth
    }
  }
})
</script>
