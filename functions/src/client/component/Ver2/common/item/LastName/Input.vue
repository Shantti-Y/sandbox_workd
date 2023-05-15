<template>
  <input-form
    :value="formValue"
    @input="formValue = $event.target.value"
    id="last_name"
    :className="className"
    name="last_name"
    placeholder="例: 鈴木"
  />
</template>
<script lang="ts">
import InputForm from '@component/Ver2/common/element/Input.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    InputForm
  },
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    formValue: {
      get(){
        return this.$store.state.formData.lastName;
      },
      set(newValue){
        this.$store.dispatch('formData/updateLastName', newValue);
      }
    }
  }
})
</script>