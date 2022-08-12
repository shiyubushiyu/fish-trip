import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  /* 映射关系： path -> components */
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue"),
      meta: {
        title: "首页",
        tabBarIndex: 0,
      },
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue"),
      meta: {
        title: "收藏",
        tabBarIndex: 1,
      },
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue"),
      meta: {
        title: "订单",
        tabBarIndex: 2,
      },
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue"),
      meta: {
        title: "信息",
        tabBarIndex: 3,
      },
    },

    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      meta: {
        title: "城市选择",
        hideTabBer: true,
      },
    },
    {
      path: "/search",
      component: () => import("@/views/search/search.vue"),
      meta: {
        title: "条件搜索",
        hideTabBer: true,
      },
    },
    {
      path: "/detail/:id", // 动态路由
      component: () => import("@/views/detail/detail.vue"),
      meta: {
        title: "详情页",
        hideTabBer: true,
      },
    },
  ],
});

export default router;
