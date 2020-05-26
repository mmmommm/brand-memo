import Vue from "vue";
import vuetify from "vuetify";
import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import MemoAdd from "@/views/Memo/MemoAdd.vue";

//テストすべき内容
//クリックイベントがきちんと動いているか
//v-menuがきちんと動いているか
describe("MemoAdd.vue", () => {
  let wrapper: any
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(vuetify);
    wrapper = shallowMount(MemoAdd,{
      localVue
    })
  });
  it("Testing MemoAdd", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("check click v-btn", () => {
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
