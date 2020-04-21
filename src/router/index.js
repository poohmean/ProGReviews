import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Showphone from "../views/Showphone.vue";
import Credit from "../views/Credit.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/credit",
    name: "Credit",
    component: Credit,
  },
  {
    path: "/:name",
    name: "ShowPhone",
    component: Showphone,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
