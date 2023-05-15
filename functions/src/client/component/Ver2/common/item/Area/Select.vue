<template>
  <select-form
    :value="formValue"
    @input="formValue = $event.target.value"
    id="area"
    :className="className"
    name="area"
    placeholder="地方を選択してください"
    :items="items"
  />
</template>
<script lang="ts">
import SelectForm from '@component/Ver2/common/element/Select.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SelectForm
  },
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    items() {
      return this.$store.state.masterData.areas;
    },
    formValue: {
      get(){
        return this.$store.state.formData.area;
      },
      set(newValue){
        this.$store.dispatch('formData/updateArea', newValue);
      }
    }
  }
})
</script>