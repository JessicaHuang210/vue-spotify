<template>
  <div class="footer">
    <div class="info">
      <img class="info__img" :src="require('@A/user.jpeg')" />
      <div class="info__wrap">
        <h3 class="info__song">慢靈魂efewfewfwsswdwefeww evew</h3>
        <p class="info__singer">盧廣仲</p>
        <font-awesome-icon
          class="info__icon text--primary"
          @click="toggleAdd"
          v-if="!isAdd "
          icon="check"
        ></font-awesome-icon>
        <font-awesome-icon class="info__icon" @click="toggleAdd" v-if="isAdd" icon="plus"></font-awesome-icon>
      </div>
    </div>

    <div class="play">
      <div class="play__btns"></div>
      <div class="play__bar"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Footer",
  data() {
    return {
      isAdd: false
    };
  },
  methods: {
    toggleAdd() {
      this.isAdd = !this.isAdd;
    }
  }
};
</script>

<style lang="scss" scoped src="@SCSS/layout/_footer.scss"></style>