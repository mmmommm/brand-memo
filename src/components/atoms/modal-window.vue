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
              @click="approve()"
            >
              はい
            </v-btn>
            <v-btn
              color="indigo"
              text
              :x-large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.xsOnly"
              @click="cancel()"
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
import { computed, defineComponent, SetupContext } from '@vue/composition-api'
import dialogStore from '@/stores/dialog'
export default defineComponent ({
  setup() {
    const dialog = dialogStore()
    const dialogCondition = computed(() => dialog.isDialog)
    return {
      dialogCondition,
      setDialog: dialog.setDialog,
    }

    const approve = () => {
      return
    }
    const cancel = () => {
      return
    }
  }
})
</script>
