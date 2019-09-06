<template>
  <div>
    <h3 class="title-border-b mt-2">{{data.tabs[0].name}}</h3>
    <Grid>
      <GItem :key="i.title" class="card-1st" v-for="i in data.musicStyle">
        <img :src="i.thumbnail" />
        <span class="card-1st__text">{{i.title}}</span>
      </GItem>
    </Grid>
  </div>
</template>
<script>
import { Grid, GItem } from "@C/Grid";
export default {
  name: "Tab0",
  props: ["data"],
  created() {},
  components: { Grid, GItem }
};
</script>