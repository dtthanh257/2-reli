import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login/index.vue";
import Register from "@/pages/Register/index.vue";
import Home from "@/pages/Home/index.vue";
import About from "@/pages/About/index.vue";
import Postforsale from "@/pages/PostForSale/index.vue";
import ProfilePage from "@/pages/Profile/index.vue";
import Procurement from "@/pages/Procurement/index.vue";
import ProductManage from "@/pages/ProductManage/index.vue";
import Collect from "@/pages/Collect/index.vue";
import BuyInfo from "@/pages/BuyInfo/index.vue";
import ProductDetail from "@/pages/ProductDetail/index.vue";
const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/postforsale",
    component: Postforsale,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/procurement",
    component: Procurement,
  },
  {
    path: "/productmanage",
    component: ProductManage,
  },
  {
    path: "/collect",
    component: Collect,
  },
  {
    path: "/buyinfo",
    component: BuyInfo,
  },
  {
    path: "/productdetail/:id",
    name: "ProductDetail",
    component: ProductDetail,
    props: true, // Đặt props: true để truyền các tham số từ URL vào component
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
