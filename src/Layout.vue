<template>
  <div class="layout">
    <Header />
    <main>
      <Left />
      <Content />
      <Right />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "@C/Header.vue";
import Left from "@C/SidebarLeft.vue";
import Right from "@C/SidebarRight.vue";
import Content from "@C/Container.vue";
import Footer from "@C/Footer.vue";
export default {
  name: "Layout",
  components: { Header, Left, Right, Content, Footer }
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  main {
    display: flex;
    flex-grow: 1;
    min-height: 0;
    > div[class^="sidebar-"] {
      flex-shrink: 0;
      background-color: $color-grey-1;
      color: $color-grey-light-2;
      font-size: $font-size-sm;
    }
  }
}
</style>