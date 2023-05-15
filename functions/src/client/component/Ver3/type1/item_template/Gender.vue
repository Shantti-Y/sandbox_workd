<template>
  <div class="example">
    <label for="arealabel">性別</label>
    <div class="gender" v-for="item in items">
      <input type="radio" :id="`gender-${item.value}`" name="gender" :value="item.value" v-model="value" />
      <label :for="`gender-${item.value}`">{{ item.name }}</label>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGender } from '@component/Ver3/composition_api/Gender';
const { value, items } = useGender();
</script>
<style>

 
.example{
    text-align: center;
}

.input-form {
  width: 140px;
  display: inline-block;
}
</style>