<template>
  <div>
    <h3 class="title-border-b mt-2">精選排行榜</h3>
    <Grid class="grid mb-5">
      <GItem :key="i.name" class="card-2nd" v-for="i in data.tops">
        <img :src="i.thumbnail" class="card-2nd__thumbnail" />
        <div class="card-2nd__title">{{i.title}}</div>
        <div class="card-2nd__description">{{i.description}}</div>
        <div class="card-2nd__fans">{{numberWithCommas(i.fans)}} 位粉絲</div>
      </GItem>
    </Grid>
    <div class="hr"></div>
  </div>
</template>
<script>
import { Grid, GItem } from "@C/Grid";
import { numberWithCommas } from "@U/format.js";
export default {
  name: "Tab1",
  props: ["data"],
  data() {
    return {
      numberWithCommas
    };
  },
  components: { Grid, GItem }
};
</script>