<template>
  <div class="example">
    <label for="arealabel">性別</label>
      <select name="gender" class="gender" id="gender" :checked="value" @change="(e) => value = e.target.value">
      <option value="">性別をお選びください</option>
      <option v-for="item in items" :value="item.value">{{ item.name }}</option>
    </select>
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