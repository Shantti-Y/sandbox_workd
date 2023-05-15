<template>
  <div class="example">
    <label for="arealabel">地方</label>
    <area-form
      className="input-form"
    />
  </div>
</template>
<script lang="ts">
import AreaForm from '@component/Ver2/common/item/Area/select.vue';
export default {
  components: {
    AreaForm
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