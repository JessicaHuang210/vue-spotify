<template>
  <div class="browse">
    <h1 class="title-1st mb-2">瀏覽</h1>
    <Tabs :tabs="tabs">
      <Tab0 :data="{musicStyle:musicStyle,tabs:tabs}" slot="0" />
      <Tab1 :data="{tops:tops,tabs:tabs}" slot="1"></Tab1>
      <Tab2 slot="2"></Tab2>
      <Tab3 slot="3"></Tab3>
      <Tab4 :data="{tabs:tabs}" slot="4"></Tab4>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "@C/Tabs/Tabs.vue";
import Tab0 from "./Tab0";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

export default {
  name: "Browse",
  data() {
    return {
      tabs: [
        { key: 0, name: "曲風與情調" },
        { key: 1, name: "排行榜" },
        { key: 2, name: "最新發行" },
        { key: 3, name: "發掘" },
        { key: 4, name: "演唱會" }
      ],
      musicStyle: [
        {
          thumbnail:
            "https://t.scdn.co/images/fd2cdde10ea04ccfb10c902274be8815.jpeg",
          title: "華語流行"
        },
        {
          thumbnail:
            "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
          title: "流行樂"
        },
        {
          thumbnail:
            "https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
          title: "情調"
        },
        {
          thumbnail:
            "https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg",
          title: "弛放"
        },
        {
          thumbnail:
            "https://t.scdn.co/images/69c728f3bd9643a5ab0f4ef5a79919f1.jpeg",
          title: "韓風流行"
        },
        {
          thumbnail:
            "https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg",
          title: "專注"
        }
      ],
      tops: [
        {
          title: "台灣前50名",
          description: "每日為你更新目前台灣最熱播的歌曲",
          thumbnail: "https://charts-images.scdn.co/REGIONAL_TW_DEFAULT.jpg",
          fans: 117400
        },
        {
          title: "全球前50名",
          description: "每日為你更新目前最熱播的歌曲",
          thumbnail:
            "https://charts-images.scdn.co/REGIONAL_GLOBAL_DEFAULT.jpg",
          fans: 13961596
        },
        {
          title: "全球瘋傳前50名",
          description: "每日為你更新全球最為轉傳討論的歌曲",
          thumbnail: "https://charts-images.scdn.co/VIRAL_GLOBAL_DEFAULT.jpg",
          fans: 1514101
        }
      ]
    };
  },
  created() {},
  methods: {},
  components: { Tabs, Tab0, Tab1, Tab2, Tab3, Tab4 }
};
</script>
<style lang="scss" scoped src="@SCSS/pages/_browse.scss"></style> 