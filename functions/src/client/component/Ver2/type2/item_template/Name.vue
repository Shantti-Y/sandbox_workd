<template>
  <div class="example name">
    <div class="name-form">
      <label for="last_name_label">姓</label>
      <last-name-form className="input-form" />
    </div>
    <div class="name-form">
      <label for="first_name_label">名</label>
      <first-name-form className="input-form" />
    </div>
  </div>
</template>
<script lang="ts">
import LastNameForm from '@component/Ver2/common/item/LastName/Input.vue';
import FirstNameForm from '@component/Ver2/common/item/FirstName/Input.vue';
export default {
  components: {
    LastNameForm,
    FirstNameForm
  }
}
</script>
<style scoped>

.name {
  overflow: hidden;
}
.name-form {
  float: left;
  width: 50%;
}
.name-form input {

}
</style>