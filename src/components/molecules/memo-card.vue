<template>
  <v-flex
    xs12
    sm6
    md4
  >
    <v-btn
      outlined
      width="350"
      height="140"
      class="my-5"
      :to="{ name: 'MemoDetail', params: { memo: memo.slug } }"
    >
      <v-card
        width="350"
        height="140"
      >
        <v-card-text class="ml-2 code">
          {{ memo.code }}
        </v-card-text>
        <v-card-title class="ml-2 name">
          {{ memo.name }}
        </v-card-title>
      </v-card>
    </v-btn>
  </v-flex>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { MemoItem } from '@/interface/memoItem'
type Props = {
  memo: MemoItem[];
}
export default defineComponent ({
  props: {
    memo: {
      default: [],
      required: true
    }
  },
  setup(props: Props) {
    props.memo
  }
})
</script>
