import Vue from "vue";
import Vuetify from "vuetify";
import { mount, shallowMount } from '@vue/test-utils';
import MemoSearch from '@/views/memo/MemoSearch.vue';

//テストすべき内容
//@clickが動いているか
describe("memoSearch.vue", () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  });
  it("Testing memoSearch", () => {
    const wrapper = mount(MemoSearch);
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("check click v-btn", () => {
    const wrapper = mount(MemoSearch);
    const stub = jest.fn();
    const button = wrapper.find('.filter')
    wrapper.setMethods({
      filteredList: stub
    });
    expect(stub).toHaveBeenCalledTimes(0);
    button.trigger("click");
    expect(stub).toHaveBeenCalledTimes(1);
  });
});
