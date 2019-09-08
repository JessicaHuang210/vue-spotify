<template>
  <div>
    <h3 class="title-border-b mt-2">{{data.tabs[0].name}}</h3>
    <grid>
      <grid-item :key="i.title" class="card-1st" v-for="i in data.musicStyle">
        <img :src="i.thumbnail" />
        <span class="card-1st__text">{{i.title}}</span>
      </grid-item>
    </grid>
  </div>
</template>
<script>
import { Grid, GridItem } from "@C/Grid";
export default {
  name: "Tab0",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  created() {},
  components: { grid: Grid, "grid-item": GridItem }
};
</script>