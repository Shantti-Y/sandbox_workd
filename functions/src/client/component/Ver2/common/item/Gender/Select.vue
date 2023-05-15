<template>
  <select-form
    :value="formValue"
    @input="formValue = $event.target.value"
    id="gender"
    :className="className"
    name="gender"
    placeholder="性別を選択してください"
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