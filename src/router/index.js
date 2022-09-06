import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Top",
      component: () => import("../components/views/Top.vue"),
    },
    {
      path: "/video",
      name: "Video",
      component: () => import("../components/views/Video.vue"),
    }
  ],
});

export default router;