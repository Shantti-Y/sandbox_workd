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
<script lang="ts">
import NameForm from '@component/Ver2/type2/item_template/Name.vue';
import EmailForm from '@component/Ver2/type2/item_template/Email.vue';
import AreaForm from '@component/Ver2/type2/item_template/Area.vue';
import GenderForm from '@component/Ver2/type2/item_template/Gender.vue';
import Links from '@component/Links.vue';
export default {
  components: {
    NameForm,
    EmailForm,
    AreaForm,
    GenderForm,
    Links
  },
  methods: {
    execSubmit(){
      alert(`名前: ${this.$store.state.formData.lastName} ${this.$store.state.formData.firstName}`);
      alert(`Emailアドレス: ${this.$store.state.formData.email}`);
      alert(`地方: ${this.$store.getters['masterData/selectedArea'](this.$store.state.formData.area).name}`);
      alert(`性別: ${this.$store.getters['masterData/selectedGender'](this.$store.state.formData.gender).name}`);
    }
  }
}
</script>
<style scoped>
 
form {
  background: #eeabaa;
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