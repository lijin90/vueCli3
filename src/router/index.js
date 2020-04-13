import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {path: '/',redirect:'/Home'},
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue")
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cityList",
    name: "cityList",
    component: () =>import(/* webpackChunkName: "about" */ "../views/cityList.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    redirect: "/menu1",
    children: [
      {
        path: "/menu1",
        name: "menu1",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/parent/menu1.vue")
      },
      {
        path: "/menu2",
        name: "menu2",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/parent/menu2.vue")
      },
      {
        path: "/menu3",
        name: "menu3",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/parent/menu3.vue")
      }
    ]
  },
  {
    path: "*", // 页面不存在的情况下会跳到404页面
    redirect: "/404",
    name: "404",
    hidden: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
