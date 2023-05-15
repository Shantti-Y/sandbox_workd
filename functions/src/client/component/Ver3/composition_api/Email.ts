import { computed } from "vue";
import { useStore } from "@store";

export const useEmail = () => {
  const store = useStore();

  const value = computed({
    get(){
      return store.state.formData.email;
    },
    set(newValue){
      store.dispatch('formData/updateEmail', newValue);
    }
  });
  
  return { value }
}

