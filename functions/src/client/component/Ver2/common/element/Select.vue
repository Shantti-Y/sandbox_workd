<template>
  <select :name="name" :class="className" :id="id" :checked="formValue" @change="() => formValue = $event.target.value">
    <option value="">{{ placeholder}}</option>
    <option v-for="item in items" :value="item.value">{{ item.name }}</option>
</select>
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
    },
    placeholder: {
      type: String,
      default: '選択してください'
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