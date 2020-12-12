import MemoMypage from '@/views/memo-mypage.vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe('memo-mypage.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const wrapper = shallowMount(MemoMypage, {
    localVue,
    vuetify,
  })
  it('snapshot test', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})