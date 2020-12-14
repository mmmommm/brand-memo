import MemoCard from "@/components/molecules/memo-card.vue"
import Vuetify from "vuetify"

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe("memo-card.vue", () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  
  const wrapper = shallowMount(MemoCard, {
    localVue,
    vuetify,
    propsData: {
      memo: {
        code: 1111,
        slug: "11111111",
        name: "dummy",
      }
    }
  })
  it("<MemoCard />", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
