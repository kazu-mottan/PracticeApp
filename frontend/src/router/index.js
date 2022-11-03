import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Top",
      component: () => import("../components/views/TopPage.vue"),
    },
    {
      path: "/video",
      name: "Video",
      component: () => import("../components/views/VideoPage.vue"),
    }
  ],
});

export default router;