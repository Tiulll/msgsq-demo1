import { createRouter, createWebHistory } from "vue-router";

// 普通引入方式-把整个路由打包成一个js文件，加载缓慢
// import HomeView from "../views/HomeView.vue";

// 路由模块-动态引入
const HomeView = () => import("@/views/HomeView.vue");
const AboutView = () => import("@/views/AboutView.vue");

// 面试题主页
const InterviewView = () => import("@/views/InterviewView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/interview",
      name: "interview",
      component: InterviewView,
    },

    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
  ],
});

export default router;
