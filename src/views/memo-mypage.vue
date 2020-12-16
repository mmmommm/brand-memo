<template>
  <v-app>
    <LoadingScreen v-show="isLoading" />
    <Layout v-show="!isLoading">
      <template v-if="haveMemo">
        <MemoCard
          v-for="(memo, index) in memos"
          :key="index"
          :memo="memo"
        />
      </template>
      <template v-if="!haveMemo">
        <v-container>
          <v-layout
            align-center
            column
            justify-center
            fill-height
          >
            <h1 class="display-2 font-weight-thin my-12">
              まだメモがありません
            </h1>
            <h4 class="subheading mt-12">
              是非下記のボタンを押下しメモを作成してみてください。
            </h4>
            <v-btn
              outlined
              rounded
              to="/MemoAdd"
              class="mt-4"
            >
              メモを作成する
            </v-btn>
          </v-layout>
        </v-container>
      </template>
    </Layout>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import LoadingScreen from '@/components/atoms/loading-screen.vue'
import Layout from '@/components/atoms/base-layout.vue'
import MemoCard from '@/components/molecules/memo-card.vue'
import MypageModule from '@/modules/mypage/method'
export default defineComponent ({
  components: {
    LoadingScreen,
    Layout,
    MemoCard
  },
  setup(_, context) {
    const mypageModule = MypageModule(context)
    //created
    mypageModule.getMyMemo()
    return {
      ...mypageModule
    }
  }
})
</script>
