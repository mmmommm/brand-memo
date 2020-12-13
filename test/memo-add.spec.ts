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