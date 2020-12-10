import BaseLink from '@/components/atoms/base-link.vue'
import Vuetify from "vuetify"

import { createLocalVue, mount } from "@vue/test-utils"

describe("BaseLink.vue", () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const wrapper = mount(BaseLink, {
    localVue,
    vuetify,
  })
  it("has a link", () => {
    expect(wrapper.contains(".v-btn")).toBe(true)
  })

  it('snapshot test', () => {
    
  })
})
