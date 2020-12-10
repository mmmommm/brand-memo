import { shallowMount } from '@vue/test-utils'
import Header from '@/components/organisms/the-header.vue'

describe('Header.vue', () => {
  it('renders the correct markup', () => {
    const $vuetify.breakpoint.smAndUp = true
    const wrapper = shallowMount(Header, {
      propsData: { $vuetify.breakpoint.smAndUp }
    })
    expect(wrapper).toMatchSnapshot()
  })
})