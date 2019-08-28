<template>
  <div class="home">
    <h1 class="title-1st mb-2">瀏覽</h1>
    <Tabs :tabs="tabs">
      <div slot="0">
        <h3 class="title-border-b mt-2">{{tabs[0].name}}</h3>
        <div class="grid">
          <div class="grid__item">
            <img class src="@/assets/h01.jpeg" />
          </div>
          <div class="grid__item">
            <img class src="@/assets/h02.jpg" />
          </div>
          <div class="grid__item">
            <img class src="@/assets/h03.jpg" />
          </div>
          <div class="grid__item">
            <img class src="@/assets/h04.jpg" />
          </div>
          <div class="grid__item">
            <img class src="@/assets/h05.jpeg" />
          </div>
          <div class="grid__item">
            <img class src="@/assets/h06.jpg" />
          </div>
        </div>
      </div>
      <div slot="1">
        <h3 class="title-border-b mt-2">精選排行榜</h3>
      </div>
      <div slot="2">
        <h3 class="title-border-b mt-2">最棒的最新發行音樂</h3>
      </div>
      <div slot="3">
        <h3 class="title-border-b mt-2">為您打造的播放清單</h3>
      </div>
      <div slot="4">
        <h3 class="title-border-b mt-2">{{tabs[4].name}}</h3>
      </div>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "@C/Tabs/Tabs.vue";
export default {
  name: "Home",
  data() {
    return {
      tabs: [
        { name: "曲風與情調" },
        { name: "排行榜" },
        { name: "最新發行" },
        { name: "發掘" },
        { name: "演唱會" }
      ]
    };
  },
  components: { Tabs }
};
</script>
<style lang="scss" scoped src="@SCSS/pages/_home.scss"></style> 