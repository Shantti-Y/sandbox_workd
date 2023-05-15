<template>
  <radio-form
    :value="formValue"
    @input="formValue = $event.target.value"
    id="gender"
    :className="className"
    name="gender"
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
      return this.$store.state.masterData.genders;
    },
    formValue: {
      get(){
        return this.$store.state.formData.gender;
      },
      set(newValue){
        this.$store.dispatch('formData/updateGender', newValue);
      }
    }
  }
})
</script>