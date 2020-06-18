<template>
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
        x-large
        outlined
        class="ml-12 mb-4"
      >
        Deletememo
      </v-btn>
    </template>
      <v-card
        width='290'
        height='150'
      >
        <v-card-title>
          本当に削除してよろしいですか？
        </v-card-title>
        <v-layout
          justify-center
        >
          <v-card-actions
            name='deletememo'
          >
            <v-spacer/>
            <v-btn
              @click='deleteMemo'
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
          </v-card-actions>
        </v-layout>
      </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { firestore } from '@/firebase/fireStore';
@Component
export default class DeleteButton extends Vue {
  dialog = false
  slug: string | undefined = ''
  deleteMemo() {
    firestore.collection('memos').doc(this.slug).delete()
    .then(() => {
      this.$router.push('/')
    })
  }
}
</script>