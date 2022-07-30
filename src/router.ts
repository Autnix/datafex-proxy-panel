import { createRouter, createWebHistory } from "vue-router";

// Page Imports
import HomePage from "./pages/HomePage.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
