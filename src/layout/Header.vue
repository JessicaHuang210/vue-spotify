<template>
  <header class="header">
    <a @click="openMenu"
      class="mobile-menu"
      href="#">
      <font-awesome-icon icon="bars"></font-awesome-icon>
    </a>
    <div class="nav-arrow">
      <a class="nav-arrow__item"
        href="#">
        <font-awesome-icon icon="chevron-left"></font-awesome-icon>
      </a>
      <a class="nav-arrow__item"
        href="#">
        <font-awesome-icon icon="chevron-right"></font-awesome-icon>
      </a>
    </div>
    <form class="search">
      <font-awesome-icon class="search__icon"
        icon="search"></font-awesome-icon>
      <input class="search__input"
        placeholder="搜尋"
        type="search"
        v-model="searchText" />
    </form>
    <div class="account">
      <img :src="require('@A/user.jpeg')"
        class="account__img" />
      <span class="account__name">{{accountName}}</span>
      <a @click.prevent="toggleAccountDropdownMenuOpen"
        class="account__icon"
        href="#">
        <font-awesome-icon icon="chevron-down"></font-awesome-icon>
      </a>
      <transition name="fade">
        <div class="account__dropdown"
          v-if="accountDropdownMenuOpen">
          <a class="account__dropdown__item"
            href="#">私人工作階段</a>
          <a class="account__dropdown__item"
            href="#">帳戶</a>
          <a class="account__dropdown__item"
            href="#">設定</a>
          <a class="account__dropdown__item"
            href="#">登出</a>
          <a class="account__dropdown__item"
            @click.prevent="login">登入</a>
        </div>
      </transition>
    </div>
  </header>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      accountName: "王小明",
      searchText: "",
      accountDropdownMenuOpen: false
    };
  },
  methods: {
    ...mapActions(["setMenuActive"]),
    openMenu() {
      this.setMenuActive(true);
    },
    toggleAccountDropdownMenuOpen() {
      this.accountDropdownMenuOpen = !this.accountDropdownMenuOpen;
    },
    login() {
      const redirect_uri = "http://localhost:8080/callback/";
      const url = `https://accounts.spotify.com/authorize?client_id=${process.env.VUE_APP_CLIENT_ID}&response_type=token&redirect_uri=${redirect_uri}`;
      window.location = url;
    }
  }
};
</script>
<style lang="scss" scoped src="@SCSS/layout/_header.scss"></style> 