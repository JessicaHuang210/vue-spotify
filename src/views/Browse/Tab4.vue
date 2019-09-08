<template>
  <div>
    <h3 class="title-border-b mt-2">{{data.tabs[4].name}}</h3>
  </div>
</template>
<script>
export default {
  name: "Tab4",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>