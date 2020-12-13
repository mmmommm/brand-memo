import MemoHome from '@/views/memo-home.vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe('memo-home.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const pageChange = jest.fn()
  const wrapper = shallowMount(MemoHome, {
    localVue,
    vuetify,
    data() {
      return {
        isLoading: false,
        memoLists: [
          {
            code: 1111,
            slug: "11111111",
            name: "dummy",
            capitalization: 1,
            floating: 1,
            theme: "dummy",
            price: 1,
            url: "https://dummy.ac.jp",
            reason: "dummy",
          },
        ],
        currentpage: 1,
        pageLength: 1,
      }
    },
    methods: {
      pageChange
    }
  })
  it('<MemoHome />', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})