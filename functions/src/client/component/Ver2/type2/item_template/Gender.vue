<template>
  <div class="example">
    <label for="arealabel">性別</label>
    <gender-form
      className="input-form"
    />
  </div>
</template>
<script lang="ts">
import GenderForm from '@component/Ver2/common/item/Gender/Select.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    GenderForm
  }
});
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