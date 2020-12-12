import MemoAdd from '@/views/memo-add.vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe('memo-add.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const wrapper = shallowMount(MemoAdd, {
    localVue,
    vuetify,
  })
  it('snapshot test', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})