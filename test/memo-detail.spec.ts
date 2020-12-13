import MemoDetail from '@/views/memo-detail.vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe('memo-detail.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const wrapper = shallowMount(MemoDetail, {
    localVue,
    vuetify,
  })
  it('<MemoDetail />', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})