<template>
  <div class="my-2">
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          text
          :x-large="$vuetify.breakpoint.smAndUp"
          :small="$vuetify.breakpoint.xsOnly"
          class="mx-2"
          v-on="on"
        >
          <slot name="buttonTitle" />
        </v-btn>
      </template>
      <v-card
        width="290"
        height="190"
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
              @click="approve"
            >
              はい
            </v-btn>
            <v-btn
              color="indigo"
              text
              :x-large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.xsOnly"
              @click="cancel"
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
import { Component, Vue, Emit } from 'vue-property-decorator'
@Component
export default class ModalWindow extends Vue {
  get dialog() {
    return this.$store.getters.isDialog
  }
  set dialog(opened: boolean) {
    this.$store.commit('setDialog', opened)
  }
  @Emit()
  approve() {
    return
  }
  @Emit()
  cancel() {
    return
  }
}
</script>
