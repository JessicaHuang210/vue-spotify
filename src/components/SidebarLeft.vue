<template>
  <div class="sidebar-left">
    <nav class="menu">
      <a href="#" class="menu__link active">瀏覽</a>
      <a href="#" class="menu__link">電台</a>
      <span class="menu__title">你的音樂</span>
      <a href="#" class="menu__link">你的 Daily Mix</a>
      <a href="#" class="menu__link">歌曲</a>
      <a href="#" class="menu__link">專輯</a>
      <a href="#" class="menu__link">藝人</a>
      <a href="#" class="menu__link">電台</a>
      <a href="#" class="menu__link">本機擋案</a>
      <span class="menu__title">播放列表</span>
      <a href="#" class="menu__link">本週新發現</a>
      <a href="#" class="menu__link">本週新發現</a>
      <a href="#" class="menu__link">最Hit華語榜</a>
      <a href="#" class="menu__link">我的 Shazam 曲目</a>
      <a href="#" class="menu__link">Liked from Radio</a>
    </nav>
    <a href="#" class="add-list">
      <font-awesome-icon class="add-list__icon" icon="plus"></font-awesome-icon>新增播放列表
    </a>
  </div>
</template>
<script>
export default {
  name: "SidebarLeft",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped src="@SCSS/layout/_sidebarLeft.scss"></style>