<template>
  <div class="footer">
    <div class="info">
      <img class="info__img" :src="require('@A/user.jpeg')" />
      <div class="info__wrap">
        <h3 class="info__song">慢靈魂</h3>
        <p class="info__singer">盧廣仲</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped src="@SCSS/layout/_footer.scss"></style>