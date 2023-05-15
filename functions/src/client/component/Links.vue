<template>
  <div class="links">
    <div class="link-block">
      <p>Vue2</p>
      <div class="link-list">
        <router-link to="/ver2/type1" v-slot="{ href, route, navigate, isActive, isExactActive }" className="link">
          <span :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
            その1
          </span>
        </router-link>
        <router-link to="/ver2/type2" v-slot="{ href, route, navigate, isActive, isExactActive }" className="link">
          <span :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
            その2
          </span>
        </router-link>
      </div>
    </div>
    <div class="link-block">
      <p>Vue3</p>
      <div class="link-list">
        <router-link to="/ver3/type1" v-slot="{ href, route, navigate, isActive, isExactActive }" className="link">
          <span :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
            その1
          </span>
        </router-link>
        <router-link to="/ver3/type2" v-slot="{ href, route, navigate, isActive, isExactActive }" className="link">
          <span :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
            その2
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
</script>
<style scoped>
.links {
  text-align: center;
}
.link-block {
  text-align: center;
  display: inline-block;
  margin: 0 12px;
}
.link {
  display: inline-block;
  margin: 0 12px;
}
p {
  margin: 4px 0;
}
.router-link-active, .router-link-exact-active {
  color: #ff0000;
}
</style>