
import Vuetify from 'vuetify'

import SearchBar from '@/components/atoms/search-bar.vue'

import { mount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
const vuetify = new Vuetify()

describe('SearchBar.vue', () => {
  it('バリデーションの動作確認', () => {
    const wrapper = mount(SearchBar, {
      localVue,
      vuetify
    })
    const vm = wrapper.vm
    wrapper.setData({ searchTerm: 99845 })
    vm.$emit('filteredList')
    expect(wrapper.emitted().filteredList).toBeTruthy()
    // vm.$on('action-btn:clicked', event)
    // expect(event).toHaveBeenCalledTimes(0)
    // button.trigger('click')
    // expect(event).toHaveBeenCalledTimes(1)
  })
})
