import { computed } from "vue";
import { useStore } from "@store";

export const useFirstName = () => {
  const store = useStore();

  const value = computed({
    get(){
      return store.state.formData.firstName;
    },
    set(newValue){
      store.dispatch('formData/updateFirstName', newValue);
    }
  });
  
  return { value }
}

