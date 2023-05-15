<template>
  <div class="example">
    <label for="arealabel">地方</label>
    <div class="area" v-for="item in items">
      <input type="radio" :id="`area-${item.value}`" name="area" :value="item.value" v-model="value" />
      <label :for="`area-${item.value}`">{{ item.name }}</label>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useArea } from '@component/Ver3/composition_api/Area';
const { value, items } = useArea();
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