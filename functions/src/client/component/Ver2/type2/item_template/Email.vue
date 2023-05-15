<template>
  <div class="example">
    <label for="maillabel">メールアドレス</label>
    <email-form
      className="input-form"
    />
  </div>
</template>
<script lang="ts">
import EmailForm from '@component/Ver2/common/item/Email/Input.vue';
export default {
  components: {
    EmailForm
  }
}
</script>
<style scoped>

 
.example{
    text-align: center;
}

.input-form {
  width: 140px;
}
</style>