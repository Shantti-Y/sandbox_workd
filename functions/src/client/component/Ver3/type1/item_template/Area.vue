<template>
  <div class="example">
    <label for="arealabel">地方</label>
      <select name="area" class="area" id="area" :checked="value" @change="(e) => value = e.target.value">
      <option value="">地方をお選びください</option>
      <option v-for="item in items" :value="item.value">{{ item.name }}</option>
    </select>
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