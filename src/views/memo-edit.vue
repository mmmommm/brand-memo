<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <Layout>
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
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  class="mt-4 ml-4"
                  :value="date"
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="date"
                no-title
                @input="menu = false"
              />
            </v-menu>
          </v-layout>
          <v-layout wrap>
            <v-flex class="ml-4">
              <v-card-title> コード </v-card-title>
              <BaseTextInput :text="code" :rules="codeRules" :value="code" />
              <v-card-title> 銘柄名 </v-card-title>
              <BaseTextInput :text="name" :rules="nameRules" :value="name" />
              <v-card-title> 時価総額 </v-card-title>
              <BaseTextInput :text="capitalization" :rules="capitalizationRules" :value="capitalization" />
              <v-card-title> 浮動株式数 </v-card-title>
              <BaseTextInput :text="floating" :rules="floatRules" :value="floating" />
              <v-card-title> テーマ </v-card-title>
              <BaseTextInput :text="theme" :rules="themeRules" :value="theme" />
              <v-card-title> 株価 </v-card-title>
              <BaseTextInput :text="price" :rules="priceRules" :value="price" />
              <v-card-title> 会社URL </v-card-title>
              <BaseTextInput :text="url" :rules="urlRules" :value="url" />
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
            v-model="reason"
            :value="reason"
            cols="60"
            rows="25"
            class="ml-4"
            outlined
            :rules="reasonRules"
          />
          <v-btn
            type="button"
            x-large
            class="ml-12 mb-4"
            outlined
            :disabled="!valid"
            @click="updateMemo()"
          >
            updatememo
          </v-btn>
        </v-card>
      </v-flex>
    </Layout>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Layout from '@/components/atoms/base-layout.vue'
import BaseTextInput from '@/components/atoms/base-input.vue'
import CardWidth from '@/modules/common'
import DetailModule from '@/modules/detail/method'
import EditModule from '@/modules/edit/computed'
import * as rules from '@/config/rules'
interface VForm extends Vue {
  validate(): boolean;
}
export default defineComponent ({
  components: {
    Layout,
    BaseTextInput
  },
  setup(props, context) {
    const detailModule = DetailModule(context)
    const editModule = EditModule(context)
    const cardWidth = CardWidth(context)
    //method
    const codeRules = () => { return rules.codeRules }
    const nameRules = () => { return rules.nameRules }
    const capitalizationRules = () => { return rules.capitalizationRules }
    const floatRules = () => { return rules.floatRules }
    const themeRules = () => { return rules.themeRules }
    const priceRules = () => { return rules.priceRules }
    const urlRules = () => { return rules.urlRules }
    const reasonRules = () => { return rules.reasonRules }
    //この関数はmemoDetailのと一緒なのでまとめたい
    //created
    detailModule.getSpecificMemo()
    return {
      codeRules,
      nameRules,
      capitalizationRules,
      floatRules,
      themeRules,
      priceRules,
      urlRules,
      reasonRules,
      cardWidth,
      ...editModule
    }
  }
})
</script>
