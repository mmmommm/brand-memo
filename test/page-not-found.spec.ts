import PageNotFound from '@/views/page-not-found.vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe('page-not-found.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    
  })
  const wrapper = shallowMount(PageNotFound, {
    localVue,
    vuetify,
  })
  it('<PageNotFound />', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})