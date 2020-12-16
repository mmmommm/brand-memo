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
        md6
      >
        <v-card
          :width="cardWidth"
          flat
        >
          <v-layout>
            <v-flex class="ml-4">
              <v-card-title> 日付 </v-card-title>
              <BaseText :value="generateDate()" />
              <v-card-title> コード </v-card-title>
              <BaseNumberInput
                :input="code"
                :rules="codeRules()"
                placeholder="7203"
              />
              <v-card-title> 銘柄名 </v-card-title>
              <BaseTextInput
                :input="name"
                :rules="nameRules()"
                placeholder="トヨタ自動車"
              />
              <v-card-title> 時価総額（百万） </v-card-title>
              <BaseNumberInput
                :input="capitalization"
                :rules="capitalizationRules()"
                placeholder="21495773"
              />
              <v-card-title> 浮動株式数（株） </v-card-title>
              <BaseNumberInput
                :input="floating"
                :rules="floatRules()"
                placeholder="100000000"
              />
              <v-card-title> テーマ </v-card-title>
              <BaseTextInput
                :input="theme"
                :rules="themeRules()"
                placeholder="自動運転"
              />
              <v-card-title> 株価（円）</v-card-title>
              <BaseNumberInput
                :input="price"
                :rules="priceRules()"
                placeholder="6500"
              />
              <v-card-title> 会社URL </v-card-title>
              <BaseTextInput
                :input="url"
                :rules="urlRules()"
                placeholder="https://company.co.jp"
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
          :width="cardWidth"
          flat
          class="ml-8"
        >
          <v-card-title> 理由 </v-card-title>
          <v-textarea
            v-model="reason"
            cols="60"
            rows="35"
            outlined
            placeholder="この会社はどのような会社か、投資をするに値するか、業績等からみてどうか。"
            :rules="reasonRules()"
          />
          <v-btn
            type="submit"
            x-large
            class="ml-12 my-12 add"
            outlined
            :disabled="!valid"
            @click.prevent="saveMemo"
          >
            Addmemo ＜
          </v-btn>
        </v-card>
      </v-flex>
    </Layout>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Layout from '@/components/atoms/base-layout.vue'
import BaseTextInput from '@/components/atoms/base-textinput.vue'
import BaseNumberInput from '@/components/atoms/base-numberinput.vue'
import BaseText from '@/components/atoms/base-text.vue'
import CardWidth from '@/modules/common'
import AddModule from '@/modules/add/method'
export default defineComponent ({
  components: {
    Layout,
    BaseTextInput,
    BaseNumberInput,
    BaseText
  },
  setup(_, context) {
    const cardWidth = CardWidth(context)
    const addModule = AddModule(context)
    return {
      cardWidth,
      ...addModule
    }
  }
})
</script>
