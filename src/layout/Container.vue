<template>
  <div class="container">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Container"
};
</script>
<style lang="scss" scoped src="@SCSS/layout/_container.scss"></style>