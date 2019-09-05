import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: "hash",
  routes: [
    {
      path: "",
      name: "Browse",
      component: () => import("./views/Browse.vue")
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    }
  ]
});
