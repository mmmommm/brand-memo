import MemoHome from '@/views/memo-home.vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe('memo-home.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const wrapper = shallowMount(MemoHome, {
    localVue,
    vuetify,
  })
  it('snapshot test', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})