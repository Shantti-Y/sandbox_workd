import { computed, onMounted, watch, ref } from "vue";
import { useStore } from "vuex";

export const methods = {
  countUp: (inputCount: VueRef<number>) => {
    inputCount.value++;
  }
};

export const watchers = {
  inputValue: (inputValue: VueRef<string>, inputCount: VueRef<number>) => {
    return watch(inputValue, () => {
      methods.countUp(inputCount);
    });
  }
};

export const handleOnMounted = (inputValue: VueRef<string>, inputCount: VueRef<number>) => {
  return onMounted(() => {
    inputCount.value = 0;
    inputValue.value = ''
  });
};

export const useEmail = () => {
  const store = useStore();

  const inputCount = ref(1);
  const inputValue = computed({
    get(){
      return store.state.formData.email;
    },
    set(newValue){
      store.dispatch('formData/updateEmail', newValue);
    }
  });

  watchers.inputValue(inputValue, inputCount);
  handleOnMounted(inputValue, inputCount);
  
  return { inputValue }
}

