<template>
  <input-form
    :value="formValue"
    @input="formValue = $event.target.value"
    id="email"
    :className="className"
    name="email"
    placeholder="ooo.jp"
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
        return this.$store.state.formData.email;
      },
      set(newValue){
        this.$store.dispatch('formData/updateEmail', newValue);
      }
    }
  }
})
</script>