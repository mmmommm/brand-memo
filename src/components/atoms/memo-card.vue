<template>
  <v-flex
    xs12
    sm6
    md4
  >
    <v-card
      width='350'
      height='200'
      class='my-5'
    >
      <v-card-title
        class='ml-2 code'
      >
        {{ memo.code }}
      </v-card-title>
      <v-card-title
        class='ml-2 name'
      >
        {{ memo.name }}
      </v-card-title>
      <v-card-text>
        <v-layout>
          <v-btn
            outlined
            class='ml-2 mt-6'
            :to="{ name: 'MemoDetail', params: { memo: memo.slug }}"
          >
            viewmemo
          </v-btn>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { MemoItem } from '@/interface/memoItem';
@Component
export default class MemoCard extends Vue {
  @Prop({ default: [] })
  readonly memo!: MemoItem[]
}
</script>