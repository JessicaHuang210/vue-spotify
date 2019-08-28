<template>
  <div class="home">
    <h1 class="title-1st mb-2">瀏覽</h1>
    <Tabs :tabs="tabs">
      <div slot="0">
        <h3 class="title-border-b mt-2">{{tabs[0].name}}</h3>
        <div class="grid">
          <div class="grid__item">
            <img class src="https://t.scdn.co/images/fd2cdde10ea04ccfb10c902274be8815.jpeg" />
          </div>
          <div class="grid__item">
            <img
              class
              src="https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg"
            />
          </div>
          <div class="grid__item">
            <img
              class
              src="https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg"
            />
          </div>
          <div class="grid__item">
            <img
              class
              src="https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg"
            />
          </div>
          <div class="grid__item">
            <img class src="https://t.scdn.co/images/69c728f3bd9643a5ab0f4ef5a79919f1.jpeg" />
          </div>
          <div class="grid__item">
            <img
              class
              src="https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg"
            />
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