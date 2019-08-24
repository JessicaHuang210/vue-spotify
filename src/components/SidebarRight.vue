<template>
  <div class="sidebar-right">
    <h3 class="title-2nd">好友個人動態</h3>
    <div class="hr"></div>
    <div class="friend" v-for="i in list" :key="i.name">
      <img class="friend__img" :src="i.img" />
      <div class="friend__info">
        <div class="friend__name">{{i.name}}</div>
        <div class="friend__song">{{i.song}}</div>
        <div class="friend__singer">{{i.singer}}</div>
        <div class="friend__album">
          <font-awesome-icon icon="compact-disc"></font-awesome-icon>
          {{i.album}}
        </div>
      </div>
      <div class="friend__state" v-if="i.time">{{i.time}}</div>
      <font-awesome-icon v-else class="friend__state" icon="volume-up"></font-awesome-icon>
    </div>
    <div class="text-center">
      <a href="#" class="btn btn--second">尋找好友</a>
    </div>
  </div>
</template>


<script>
import pic from "@A/user.jpeg";
export default {
  name: "SidebarRight",
  data() {
    return {
      list: [
        {
          img: pic,
          name: "洪正一",
          song: "bad guy",
          singer: "Billie Eilish",
          album: "When we all fall asleep, where do we go ?",
          time: "14小時前"
        },
        {
          img: pic,
          name: "李詠恩",
          song: "Never Really Over",
          singer: "Katy Perry",
          album: "Katy Perry",
          time: false
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped src="@SCSS/layout/_sidebarRight.scss"></style>