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
import Cart from "@/pages/Cart/index.vue";
import ProfileAccount from '@/pages/ProfileAccount/index.vue';
const routes = [

  {
    path: "/", // Route mặc định là "/"
    redirect: "/home", 
  
  },
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
    meta: { title: '2Reli | Trang chủ' }
  },
  {
    path: "/about",
    component: About,
    meta: { title: '2Reli | Về chúng tôi' }

  },
  {
    path: "/postforsale",
    component: Postforsale,
    meta: { title: '2Reli | Đăng bán sản phẩm' }

  },
  {
    path: "/profile",
    component: ProfilePage,
    meta: { title: '2Reli | Thông tin tài khoản' }

  },
  {
    path: "/procurement",
    component: Procurement,
    meta: { title: '2Reli | Thu mua sản phẩm' }

  },
  {
    path: "/productmanage",
    component: ProductManage,
    meta: { title: '2Reli | Quản lý đơn hàng' }

  },
  {
    path: "/collect",
    component: Collect,
    meta: { title: '2Reli | Thu gom sản phẩm' }

  },
  {
    path: "/buyinfo",
    component: BuyInfo,
    meta: { title: '2Reli | Thu gom sản phẩm' }

  },
  {
    path: "/productdetail/:id",
    name: "ProductDetail",
    component: ProductDetail,
    props: true, // Đặt props: true để truyền các tham số từ URL vào component
  },
  {
    path: "/cart/:id",
    component: Cart,
    name: "Cart",
    props: true,
  },
  {
    path: '/ProfileAccount/:userId', // the colon indicates a parameter
    name: 'ProfileAccount',
    component: ProfileAccount,
    props: true,
    meta: { title: '2Reli | Thông tin tài khoản' }

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '2Reli'
  next()
})
export default router;
