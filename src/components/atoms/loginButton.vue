<template>
  <div
    class='my-2'
  >
    <v-dialog
      v-model='dialog'
      persistent
      max-width='290'
    >
      <template
        v-slot:activator='{ on }'
      >
        <v-btn
          text
          v-on='on'
          :x-large='$vuetify.breakpoint.smAndUp'
          :small='$vuetify.breakpoint.xsOnly'
        >
          Login
        </v-btn>
      </template>
      <v-card
        width='290'
        height='150'
      >
        <v-card-title class='mb-4'>
          Google認証に遷移します
        </v-card-title>
        <v-layout
          justify-center
        >
          <v-card-acrions
            name='logout'
          >
            <v-spacer/>
            <v-btn
              @click='googlelogin()'
              color='error'
              :x-large='$vuetify.breakpoint.smAndUp'
              :small='$vuetify.breakpoint.xsOnly'
              text
            >
              はい
            </v-btn>
            <v-btn
              @click='dialog = false'
              color='indigo'
              :x-large='$vuetify.breakpoint.smAndUp'
              :small='$vuetify.breakpoint.xsOnly'
              text
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
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class LoginButton extends Vue {
dialog = false
googlelogin() {
  this.dialog = false
  this.$store.dispatch('googleLogin')
}
}
</script>