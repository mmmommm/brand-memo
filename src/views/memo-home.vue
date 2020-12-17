<template>
  <v-app>
    <LoadingScreen v-show="isLoading" />
    <Layout v-show="!isLoading">
      <MemoCard
        v-for="(memo, index) in memoLists"
        :key="index"
        :memo="memo"
      />
      <v-pagination
        v-model="currentpage"
        class="my-4"
        :length="pageLength"
        :total-visible="3"
        color="black"
        @input="pageChange"
      />
    </Layout>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import LoadingScreen from '@/components/atoms/loading-screen.vue'
import Layout from '@/components/atoms/base-layout.vue'
import MemoCard from '@/components/molecules/memo-card.vue'
import HomeModule from '@/modules/home/method'
export default defineComponent ({
  components: {
    LoadingScreen,
    Layout,
    MemoCard,
  },
  setup(_, context) {
    const homeModule = HomeModule(context)
    homeModule.getMemo()
    return {
      ...homeModule
    }
  }
})
</script>
