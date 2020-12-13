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
    data() {
      return {
        isLoading: false,
        display: false,
        code: 1111,
        slug: "11111111",
        name: "dummy",
        capitalization: 1,
        floating: 1,
        theme: "dummy",
        price: 1,
        url: "https://dummy.ac.jp",
        reason: "dummy",
      }
    }
  })
  it('<MemoDetail />', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})