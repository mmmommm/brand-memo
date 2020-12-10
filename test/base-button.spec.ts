import BaseButton from '@/components/atoms/base-button.vue'
import Vuetify from 'vuetify'

import { createLocalVue, mount } from "@vue/test-utils"

describe('BaseButton.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const wrapper = mount(BaseButton, {
    localVue,
    vuetify,
  })
  it("has a button", () => {
    expect(wrapper.contains(".v-btn")).toBe(true)
  })


  it('should emit an event when the action v-btn is clicked!', () => {
    const event = jest.fn()
    const button = wrapper.find('.v-btn')
    button.trigger('click')
    expect(event).toBeCalled()
  })
})