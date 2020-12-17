<template>
  <div>
    <v-dialog
      v-model="dialogCondition"
      max-width="290"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          text
          :x-large="$vuetify.breakpoint.smAndUp"
          :small="$vuetify.breakpoint.xsOnly"
          v-on="on"
          @click="setDialog"
        >
          <slot name="buttonTitle" />
        </v-btn>
      </template>
      <v-card
        width="290"
        height="150"
      >
        <v-card-title class="mb-4">
          <slot name="modalTitle" />
        </v-card-title>
        <v-layout justify-center>
          <v-card-acrions>
            <v-spacer />
            <v-btn
              color="error"
              text
              :x-large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.xsOnly"
              @click="yes"
            >
              はい
            </v-btn>
            <v-btn
              color="indigo"
              text
              :x-large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.xsOnly"
              @click="no"
            >
              いいえ
            </v-btn>
          </v-card-acrions>
        </v-layout>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext, computed } from '@vue/composition-api'
export default defineComponent ({
  setup(_, { emit, root }: SetupContext) {
    const dialogCondition = computed(() => root.$store.getters.isDialog)
    const setDialog = () => {
      root.$store.commit('setDialog', true)
    }
    const yes = () => {
      emit("approve")
    }
    const no = () => {
      emit("cancel")
    }
    return {
      dialogCondition,
      setDialog,
      yes,
      no
    }
  }
})
</script>
