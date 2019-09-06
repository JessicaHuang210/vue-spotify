<template>
  <div class="tabs">
    <div class="tabs__header" ref="header">
      <a :class="{active:nowtab === i}" :key="elm.name" @click="select(i)" class="tabs__header__item" href="#" v-for="(elm,i) in tabs">{{elm.name}}</a>
    </div>
    <div class="tabs__content">
      <div :class="{active:nowtab === i}" :key="i" class="tabs__content__item" v-for="(elm,i) in tabs">
        <slot :name="i" />
      </div>
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