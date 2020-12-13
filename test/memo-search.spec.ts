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
    data() {
      return {
        filteredMemo: [
          {
            code: 1111,
            slug: "11111111",
            name: "dummy",
            capitalization: 1,
            floating: 1,
            theme: "dummy",
            price: 1,
            url: "https://dummy.ac.jp",
            reason: "dummy"
          }
        ]
    }
    },
  })
  it('<MemoSearch />', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})