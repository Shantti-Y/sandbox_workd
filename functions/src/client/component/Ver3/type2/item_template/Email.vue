<template>
  <div class="example">
    <label for="maillabel">メールアドレス</label>
    <input v-model="value" class="input-form" name="email" id="email" placeholder="ooo.jp">
  </div>
</template>
<script setup lang="ts">
import { useEmail } from '@component/Ver3/composition_api/Email';
const { value } = useEmail();
</script>
<style scoped>

 
.example{
    text-align: center;
}

.input-form {
  width: 140px;
}
</style>