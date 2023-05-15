import { computed } from "vue";
import { useStore } from "@store";

export const useLastName = () => {
  const store = useStore();

  const value = computed({
    get(){
      return store.state.formData.lastName;
    },
    set(newValue){
      store.dispatch('formData/updateLastName', newValue);
    }
  });
  
  return { value }
}

