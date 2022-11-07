import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "@/views/HomeScreen.vue";
import SettingsScreen from "@/views/SettingsScreen.vue";
import HelpScreen from "@/views/HelpScreen.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home-screen",
    component: HomeScreen,
  },
  {
    path: "/settings",
    name: "settings-screen",
    component: SettingsScreen,
    meta: {
      title: "MIRDL - Settings",
    },
  },
  {
    path: "/help",
    name: "help-screen",
    component: HelpScreen,
    meta: {
      title: "MIRDL - Help",
    },
  },
  {
    path: "/:patchMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL || "/"),
});

router.beforeEach((to) => {
  document.title = to.meta.title ? to.meta.title : "MIRDL";
});

export default router;
