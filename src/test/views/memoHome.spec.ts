import { shallowMount } from '@vue/test-utils';
import memoHome from '@/views/memo/memoHome.vue'

//テストすべき内容
//memo.code、memo.nameが表示されているか
//memo-detailに飛ぶボタンがきちんと作動しているか
let wrapper: any

beforeEach(() => {
  wrapper = shallowMount(memoHome)
})
describe('memoHome.vue', () => {
  it('Testing memoHome', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});