<template>
  <div>
    <h3 class="title-border-b mt-2">精選排行榜</h3>
    <grid class="grid mb-5">
      <grid-item :key="i.name" class="card-2nd" v-for="i in data.tops">
        <img :src="i.thumbnail" class="card-2nd__thumbnail" />
        <div class="card-2nd__title">{{i.title}}</div>
        <div class="card-2nd__description">{{i.description}}</div>
        <div class="card-2nd__fans">{{numberWithCommas(i.fans)}} 位粉絲</div>
      </grid-item>
    </grid>
    <div class="hr"></div>
  </div>
</template>
<script>
import { Grid, GridItem } from "@C/Grid";
import { numberWithCommas } from "@U/format.js";
export default {
  name: "Tab1",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      numberWithCommas
    };
  },
  components: { grid: Grid, "grid-item": GridItem }
};
</script>