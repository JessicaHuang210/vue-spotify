<template>
  <div :class="{active:menuActive}" class="sidebar-left">
    <nav class="menu">
      <router-link :to="{name:'Home'}" class="menu__link">
        <font-awesome-icon class="menu__link__icon" fixed-width icon="home"></font-awesome-icon>
        <span class="menu__link__text">首頁</span>
      </router-link>
      <router-link :to="{name:'Browse'}" class="menu__link">
        <font-awesome-icon class="menu__link__icon" fixed-width icon="box-open"></font-awesome-icon>
        <span class="menu__link__text">瀏覽</span>
      </router-link>
      <a class="menu__link" href="#">
        <font-awesome-icon class="menu__link__icon" fixed-width icon="satellite-dish"></font-awesome-icon>
        <span class="menu__link__text">電台</span>
      </a>
      <span class="menu__title">你的音樂</span>
      <a class="menu__link" href="#">你的 Daily Mix</a>
      <a class="menu__link" href="#">歌曲</a>
      <a class="menu__link" href="#">專輯</a>
      <a class="menu__link" href="#">藝人</a>
      <a class="menu__link" href="#">電台</a>
      <a class="menu__link" href="#">本機擋案</a>
      <span class="menu__title">播放列表</span>
      <a class="menu__link" href="#">本週新發現</a>
      <a class="menu__link" href="#">本週新發現</a>
      <a class="menu__link" href="#">最Hit華語榜</a>
      <a class="menu__link" href="#">我的 Shazam 曲目</a>
      <a class="menu__link" href="#">Liked from Radio</a>
    </nav>
    <a class="add-list" href="#">
      <font-awesome-icon class="add-list__icon" icon="plus"></font-awesome-icon>新增播放列表
    </a>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SidebarLeft",
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      this.setMenuActive(false);
    }
  },
  computed: {
    ...mapGetters(["menuActive"])
  },
  methods: {
    ...mapActions(["setMenuActive"])
  }
};
</script>
<style lang="scss" scoped src="@SCSS/layout/_sidebarLeft.scss"></style>