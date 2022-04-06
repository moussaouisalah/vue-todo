import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";

const routes = [
  { path: "/about", name: "About", component: AboutView },
  { path: "/", name: "Home", component: HomeView },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
