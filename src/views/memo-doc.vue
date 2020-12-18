<template>
  <v-app>
    <v-container>
      <v-layout
        align-center
        column
        justify-center
        fill-height
      >
        <h1 class="display-2 my-12">
          Brandmemoについて
        </h1>
        <h2>BrandMemoは自分の調べた企業についてのメモを作成するサービスです</h2>
        <h2>自分の調べた企業についての情報を残しておくのに使用してみてください</h2>
        <h3 class="mt-8">
          ログインしなくてもメモの閲覧と検索ができます
        </h3>
        <h3>
          ログインするとメモの作成・編集・削除ができます
        </h3>
        <h3 class="mt-8">
          Googleのアカウントがあればログインできます
        </h3>
        <h3>ログインして自分のメモを作成してみましょう</h3>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent ({})
</script>
