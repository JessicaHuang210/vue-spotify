<template>
  <div class="tabs">
    <div ref="header" class="tabs__header">
      <a
        v-for="(elm,i) in tabs"
        :key="elm.name"
        @click="select(i)"
        href="#"
        class="tabs__header__item"
        :class="{active:nowtab === i}"
      >{{elm.name}}</a>
    </div>
    <div class="tabs__content">
      <div v-for="elm in tabs" class="tabs__content__item">{{elm.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabs",
  props: ["tabs"],
  data() {
    return {
      nowtab: 0
    };
  },
  methods: {
    select(i) {
      this.nowtab = i;
    }
  }
};
</script>
<style lang="scss" scoped src="@SCSS/components/_tabs.scss"></style> 