import MemoAdd from '@/views/memo-add.vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe('memo-add.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const generateDate = jest.fn()
  const codeRules = jest.fn()
  const nameRules = jest.fn()
  const capitalizationRules = jest.fn()
  const floatRules = jest.fn()
  const themeRules = jest.fn()
  const priceRules = jest.fn()
  const urlRules = jest.fn()
  const reasonRules = jest.fn()
  const wrapper = shallowMount(MemoAdd, {
    localVue,
    vuetify,
    data() {
      return {
        code: 1111,
        slug: "11111111",
        name: "dummy",
        capitalization: 1,
        floating: 1,
        theme: "dummy",
        price: 1,
        url: "https://dummy.ac.jp",
        reason: "dummy",
        valid: false,
      }
    },
    methods: {
      generateDate,
      codeRules,
      nameRules,
      capitalizationRules,
      floatRules,
      themeRules,
      priceRules,
      urlRules,
      reasonRules
    }
  })
  it('<MemoAdd />', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})