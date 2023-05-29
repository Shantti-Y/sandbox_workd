import { computed, onMounted, watch, ref } from "vue";
import { useStore } from "vuex";

export const methods = {
  countUp: (inputCount: VueRef<number>) => {
    inputCount.value++;
  }
}

export const watchers = {
  inputValue: (inputValue: VueRef<number>, inputCount: VueRef<number>) => {
    return watch(inputValue, () => {
      methods.countUp(inputCount);
    });
  }
}

export const handleOnMounted = (inputValue: VueRef<number>, inputCount: VueRef<number>) => {
  return onMounted(() => {
    inputCount.value = 0;
    inputValue.value = 0;
  });
}

export const useGender = () => {
  const store = useStore();

  const inputCount = ref(1);
  const items = computed(() => store.state.masterData.genders);
  const inputValue = computed({
    get(){
      return store.state.formData.gender;
    },
    set(newValue){
      store.dispatch('formData/updateGender', newValue);
    }
  });

  watchers.inputValue(inputValue, inputCount);
  handleOnMounted(inputValue, inputCount);
  
  return { inputValue, items }
}

