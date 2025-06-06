import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
/** 페이지 */
import HomeView from "@/views/Home.vue";
import BookmarksView from "@/views/Bookmarks.vue";

const routes: Array<RouteRecordRaw> = [
    { path: "/", component: HomeView },
    { path: "/bookmarks", component: BookmarksView },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
