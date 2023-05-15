<template>
  <form>
    <name-form />
    <email-form />
    <area-form />
    <gender-form />
    <div class="example">
      <input type="submit" value="送信する" @click.prevent="execSubmit">
    </div>
    <links />
  </form>
</template>
<script setup lang="ts">
import { useStore } from '@store';
import NameForm from '@component/Ver3/type2/item_template/Name.vue';
import EmailForm from '@component/Ver3/type2/item_template/Email.vue';
import AreaForm from '@component/Ver3/type2/item_template/Area.vue';
import GenderForm from '@component/Ver3/type2/item_template/Gender.vue';
import Links from '@component/Links.vue';

const store = useStore();
const execSubmit = () => {
  alert(`名前: ${store.state.formData.lastName} ${store.state.formData.firstName}`);
  alert(`Emailアドレス: ${store.state.formData.email}`);
  alert(`地方: ${store.getters['masterData/selectedArea'](store.state.formData.area).name}`);
  alert(`性別: ${store.getters['masterData/selectedGender'](store.state.formData.gender).name}`);
}
</script>
<style scoped>
 
form {
  background: #ddccaa;
  width: 550px;
  border: solid 1px black;
 }


.example{
    text-align: center;
    margin: 10px;
}
 
form {
     width: 550px;
     border: solid 1px black;
 }
 
 
.example{
    text-align: center;
}
</style>