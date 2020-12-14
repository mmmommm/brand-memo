import Header from "@/components/organisms/the-header.vue"
import Vuetify from "vuetify"

import { createLocalVue, shallowMount } from "@vue/test-utils"

describe("the-header.vue", () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  const smAndUp = jest.fn()
  const wrapper = shallowMount(Header, {
    localVue,
    vuetify,
    data() {
      return {
        isAuthenticated: false,
        user: "dummy"
      }
    },
    methods: {
      smAndUp
    }
  })
  it("<Header />", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
