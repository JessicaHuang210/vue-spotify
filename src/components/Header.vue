<template>
  <header class="header">
    <div class="nav-arrow">
      <font-awesome-icon class="nav-arrow__item" icon="chevron-left"></font-awesome-icon>
      <font-awesome-icon class="nav-arrow__item" icon="chevron-right"></font-awesome-icon>
    </div>
    <form class="search">
      <font-awesome-icon class="search__icon" icon="search"></font-awesome-icon>
      <input type="search" class="search__input" v-model="searchText" placeholder="搜尋" />
    </form>
    <div class="account">
      <img class="account__img" :src="require('@A/user.jpeg')" />
      <span class="account__name">黃婉柔</span>
      <font-awesome-icon class="account__icon" icon="chevron-down"></font-awesome-icon>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: ""
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped src="@SCSS/layout/_header.scss"></style> 