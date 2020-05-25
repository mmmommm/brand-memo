
import { shallowMount } from "@vue/test-utils";
import memoAdd from "../../views/memo/memoAdd.vue";

//テストすべき内容
//クリックイベントがきちんと動いているか
//v-menuがきちんと動いているか
let wrapper: any;

beforeEach(() => {
  wrapper = shallowMount(memoAdd);
});
describe("memoAdd.vue", () => {
  it("Testing memoAdd", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("check click v-btn", () => {
    const stub = jest.fn();
    wrapper.setMethods({
      saveMemo: stub
    });
    wrapper.find(".add").trigger("click");
    expect(stub).toHaveBeenCalled();
  });
});
