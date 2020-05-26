import Vue from "vue";
import Vuetify from "vuetify";
import { mount, shallowMount } from '@vue/test-utils';
import MemoHome from '@/views/memo/MemoHome.vue'

//テストすべき内容
//memo.code、memo.nameが表示されているか
//memo-detailに飛ぶボタンがきちんと作動しているか
describe("memoHome.vue", () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("Testing memoHome", () => {
    const wrapper = mount(MemoHome)
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});