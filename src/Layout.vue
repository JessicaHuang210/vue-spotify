<template>
  <div class="layout">
    <Header />
    <main>
      <Left />
      <Content />
      <Right />
    </main>
    <Footer />
    <transition name="fade">
      <div @click="closeMenu" class="overlay" v-if="menuActive"></div>
    </transition>
  </div>
</template>
<script>
import Header from "@L/Header.vue";
import Left from "@L/SidebarLeft.vue";
import Right from "@L/SidebarRight.vue";
import Content from "@L/Container.vue";
import Footer from "@L/Footer.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Layout",
  components: { Header, Left, Right, Content, Footer },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["menuActive"])
  },
  methods: {
    ...mapActions(["setMenuActive"]),
    closeMenu() {
      this.setMenuActive(false);
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  main {
    display: flex;
    overflow: hidden;
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
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($color-black, 0.5);
  cursor: pointer;
}
</style>