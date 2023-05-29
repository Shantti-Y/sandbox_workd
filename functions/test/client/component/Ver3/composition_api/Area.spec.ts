import { shallowMount } from '@vue/test-utils'
import { methods, watchers, handleOnMounted } from '@component/Ver3/composition_api/Area';
import { type Ref, defineComponent, ref } from 'vue';

describe('methods', () => {
  let component;
  let wrapper;

  describe('countUp', () => {
    beforeEach(async () => {
      component = defineComponent({
        template: '<p>Hello World</p>',
        setup(props){
          const inputCount: Ref<number> = ref(0);
          const countUp = () => methods.countUp(inputCount);

          return { inputCount, countUp }
        }
      });

      wrapper = shallowMount(component);
      await wrapper.vm.$nextTick();
    });

    test('increase 1 count value every the method is called', () => {
      wrapper.vm.countUp();

      expect(wrapper.vm.inputCount).toBe(1);
    });
  });
});

describe('watchers', () => {
  let component;
  let wrapper;
  let mockFn;

  describe('inputValue', () => {
    beforeEach(async () => {
      component = defineComponent({
        template: '<p>Hello World</p>',
        setup(props){
          const inputValue: Ref<number> = ref(0);
          const inputCount: Ref<number> = ref(0);

          watchers.inputValue(inputValue, inputCount)
          return { inputValue }
        }
      });
      mockFn = jest.spyOn(methods, 'countUp').mockImplementation(() => jest.fn());
      wrapper = shallowMount(component);
      await wrapper.vm.$nextTick();
    });

    test('called countUp method', async () => {
      wrapper.vm.inputValue = 3;
      await wrapper.vm.$nextTick();

      expect(mockFn).toHaveBeenCalled();
    });
  });
});

describe('onMounted', () => {
  let component;
  let wrapper;

  beforeEach(async () => {
    component = defineComponent({
      template: '<p>Hello World</p>',
      setup(props){
        const inputValue: Ref<number> = ref(1);
        const inputCount: Ref<number> = ref(10);

        handleOnMounted(inputValue, inputCount);

        return { inputValue, inputCount };
      }
    });
    wrapper = shallowMount(component);
    await wrapper.vm.$nextTick();
  });

  test('resets inputCount value to 0', () => {
    expect(wrapper.vm.inputCount).toBe(0);
  });
  test('resets inputValue value to 0', () => {
    expect(wrapper.vm.inputValue).toBe(0);
  });
});