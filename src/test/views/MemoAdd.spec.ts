import Vue from "vue";
import Vuetify from "vuetify";
import { mount, shallowMount } from "@vue/test-utils";
import MemoAdd from "@/views/Memo/MemoAdd.vue";

//テストすべき内容
//クリックイベントがきちんと動いているか
//v-menuがきちんと動いているか
describe("MemoAdd.vue", () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  });
  it("Testing MemoAdd", () => {
    const wrapper = mount(MemoAdd)
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("check click v-btn", () => {
    const wrapper = mount(MemoAdd)
    const stub = jest.fn();
    const button = wrapper.find('.add')
    wrapper.setMethods({
      saveMemo: stub
    });
    expect(stub).toHaveBeenCalledTimes(0);
    button.trigger("click");
    expect(stub).toHaveBeenCalledTimes(1);
  });
});
