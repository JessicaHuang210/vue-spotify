import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Browse",
      component: () => import("./views/Browse")
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("./views/Home")
    },
    {
      path: "/*",
      name: "Home",
      component: () => import("./views/Home")
    }
  ]
});
