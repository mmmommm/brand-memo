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
          class='logout'
        >
          Logout
        </v-btn>
      </template>
      <v-card
        width='290'
        height='150'
      >
        <v-card-title>
          本当にログアウトしてよろしいですか？
        </v-card-title>
        <v-layout
          justify-center
        >
          <v-card-acrions>
            <v-spacer/>
            <v-btn
              @click='logout()'
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
export default class LogoutButton extends Vue {
dialog = false
logout() {
  this.dialog = false
  this.$store.dispatch('userLogout')
}
}
</script>