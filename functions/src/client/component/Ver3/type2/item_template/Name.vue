<template>
  <div class="example name">
    <div class="name-form">
      <label for="last_name_label">姓</label>
      <last-name-form className="input-form" />
      <input v-model="lastNameValue" class="input-form" name="last_name" id="last_name" placeholder="姓: 高橋">
    </div>
    <div class="name-form">
      <label for="first_name_label">名</label>
      <first-name-form className="input-form" />
      <input v-model="firstNameValue" class="input-form" name="first_name" id="first_name" placeholder="名: 二郎">
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLastName } from '@component/Ver3/composition_api/LastName';
import { useFirstName } from '@component/Ver3/composition_api/FirstName';
const lastNameValue = useLastName().value;
const firstNameValue = useFirstName().value;
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