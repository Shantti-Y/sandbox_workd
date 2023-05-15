<template>
  <input v-model="formValue" :class="className" :name="name" :id="id" :placeholder="placeholder">
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  computed: {
    formValue: {
      get(){
        return this.value;
      },
      set(newValue){
        this.$emit('input', newValue)
      }
    }
  }
});

</script>