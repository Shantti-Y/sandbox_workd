import { computed } from "vue";
import { useStore } from "@store";

export const useArea = () => {
  const store = useStore();

  const items = computed(() => store.state.masterData.areas);

  const value = computed({
    get(){
      return store.state.formData.area;
    },
    set(newValue){
      store.dispatch('formData/updateArea', newValue);
    }
  });
  
  return { value, items }
}

