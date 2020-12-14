import MemoMypage from '@/views/memo-mypage.vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe('memo-mypage.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const wrapper = shallowMount(MemoMypage, {
    localVue,
    vuetify,
    data() {
      return {
        isLoading: false,
        haveMemo: false,
        memos: [
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
      }
    }
  })
  it('<MemoMypage />', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})