import MemoSearch from '@/views/memo-search.vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe('memo-search.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const wrapper = shallowMount(MemoSearch, {
    localVue,
    vuetify,
  })
  it('snapshot test', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})