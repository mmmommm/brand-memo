import { shallowMount } from '@vue/test-utils';
import memoSearch from '@/views/memo/memoSearch.vue';

//テストすべき内容
//@clickが動いているか
let wrapper: any;

beforeEach(() => {
  wrapper = shallowMount(memoSearch);
});
describe('memoSearch.vue', () => {
  it('Testing memoSearch', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it('check click v-btn', () => {
    const stub = jest.fn();
    wrapper.setMethods({
      filteredList: stub
    });
    wrapper.find('.filter').trigger('click');
    expect(stub).toHaveBeenCalled();
  });
});
