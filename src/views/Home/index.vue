<template>
  <div class="home">home</div>
</template>
<script>
import AJAX from "@/api/axios";
import axios from "axios";
export default {
  name: "Home",
  methods: {},
  created() {
    axios.get("https://accounts.spotify.com/v1/me");
  }
};
</script>