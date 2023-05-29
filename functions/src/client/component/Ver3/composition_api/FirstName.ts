import { computed, onMounted, watch, ref } from "vue";
import { useStore } from "vuex";

export const methods = {
  countUp: (inputCount: VueRef<number>) => {
    inputCount.value++;
  }
}

export const watchers = {
  inputValue: (inputValue: VueRef<string>, inputCount: VueRef<number>) => {
    return watch(inputValue, () => {
      methods.countUp(inputCount);
    });
  }
}

export const handleOnMounted = (inputValue: VueRef<string>, inputCount: VueRef<number>) => {
  return onMounted(() => {
    inputCount.value = 0;
    inputValue.value = ''
  });
}

export const useFirstName = () => {
  const store = useStore();
  
  const inputCount = ref(1);
  const inputValue = computed({
    get(){
      return store.state.formData.firstName;
    },
    set(newValue: string){
      store.dispatch('formData/updateFirstName', newValue)
    }
  });

  watchers.inputValue(inputValue, inputCount);
  handleOnMounted(inputValue, inputCount);
  
  return { inputValue }
}

