<template>
<div>
  <div :class="className" v-for="item in items">
    <input type="radio" :id="`${id}-${item.value}`" :name="name" :value="item.value" v-model="formValue" />
    <label :for="`${id}-${item.value}`">{{ item.name }}</label>
  </div>
</div>
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
    items: {
      type: Array,
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