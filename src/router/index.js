import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import buttonVue from "@/components/button.vue";
import DraggableTableVue from "@/components/DraggableTable.vue";
import sortableVue from "@/components/sortablejs.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // component: buttonVue,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/table",
    name: "table",
    // component: HomeView
    component: sortableVue,
  },
  // {
  //   path: "/sortable",
  //   name: "sortable",
  //   component: sortableVue,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
