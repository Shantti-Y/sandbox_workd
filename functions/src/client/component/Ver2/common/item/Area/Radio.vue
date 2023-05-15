<template>
  <radio-form
    :value="formValue"
    @input="formValue = $event.target.value"
    id="area"
    :className="className"
    name="area"
    :items="items"
  />
</template>
<script lang="ts">
import RadioForm from '@component/Ver2/common/element/Radio.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    RadioForm
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