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
          <v-flex class="ml-4">
            <v-card-title> 日付 </v-card-title>
            <BaseText :value="date" />
            <v-card-title> コード </v-card-title>
            <v-text-field
              v-model.number="code"
              class="py-2"
              type="number"
              :rules="codeRules()"
              :value="code"
            />
            <v-card-title> 銘柄名 </v-card-title>
            <v-text-field
              v-model="name"
              class="py-2"
              type="text"
              :rules="nameRules()"
              :value="name"
            />
            <v-card-title> 時価総額 </v-card-title>
            <v-text-field
              v-model.number="capitalization"
              class="py-2"
              type="number"
              :rules="capitalizationRules()"
              :value="capitalization"
            />
            <v-card-title> 浮動株式数 </v-card-title>
            <v-text-field
              v-model.number="floating"
              class="py-2"
              type="number"
              :rules="floatRules()"
              :value="floating"
            />
            <v-card-title> テーマ </v-card-title>
            <v-text-field
              v-model="theme"
              class="py-2"
              type="text"
              :rules="themeRules()"
              :value="theme"
            />
            <v-card-title> 株価 </v-card-title>
            <v-text-field
              v-model.number="price"
              class="py-2"
              type="number"
              :rules="priceRules()"
              :value="price"
            />
            <v-card-title> 会社URL </v-card-title>
            <v-text-field
              v-model="url"
              class="py-2"
              type="text"
              :rules="urlRules()"
              :value="url"
            />
          </v-flex>
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
            :rules="reasonRules()"
          />
          <v-btn
            type="button"
            x-large
            class="ml-12 mb-4"
            outlined
            :disabled="!valid"
            @click="updateMemo"
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
import BaseText from '@/components/atoms/base-text.vue'
import { CardWidth } from '@/modules/common'
import EditModule from '@/modules/edit/computed'
export default defineComponent ({
  components: {
    Layout,
    BaseText,
  },
  props: {
    slug: {
      type: String,
      require: true,
      default: "",
    }
  },
  setup(props, context) {
    const editModule = EditModule(context, props.slug)
    const cardWidth = CardWidth(context)
    //created
    editModule.getEditMemo()
    return {
      cardWidth,
      ...editModule
    }
  }
})
</script>
