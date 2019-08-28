<template>
  <div class="home">
    <h1 class="title-1st mb-2">瀏覽</h1>
    <Tabs :tabs="tabs" />
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