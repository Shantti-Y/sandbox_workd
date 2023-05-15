import { computed } from "vue";
import { useStore } from "@store";

export const useGender = () => {
  const store = useStore();

  const items = computed(() => store.state.masterData.genders);

  const value = computed({
    get(){
      return store.state.formData.gender;
    },
    set(newValue){
      store.dispatch('formData/updateGender', newValue);
    }
  });
  
  return { value, items }
}

