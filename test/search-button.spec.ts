
import Vuetify from 'vuetify'

import SearchButton from '@/components/atoms/search-button.vue'

import { mount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
const vuetify = new Vuetify()

describe('DeleteButton.vue', () => {
  it('ボタンの動作確認', () => {
    const wrapper = mount(SearchButton, {
      localVue,
      vuetify
    })
    const event = jest.fn()
    const button = wrapper.find('.v-btn')

    wrapper.vm.$on('action-btn:clicked', event)
    expect(event).toHaveBeenCalledTimes(0)
    button.trigger('click')
    expect(event).toHaveBeenCalledTimes(1)
  })
})
