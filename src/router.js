import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Home from "./views/Home.vue";
import Auction from "./views/auction";
import CreateAuction from "./views/auction/create-auction";
import AuctionDetail from "./views/auction/detail";
import Credit from "./views/credit";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/landing",
      name: "Landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter,
      },
    },
    {
      path: "/",
      name: "Home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter,
      },
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter,
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter,
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter,
      },
    },
    {
      path: "/auction",
      name: "auction",
      components: {
        header: AppHeader,
        default: Auction,
        footer: AppFooter,
      },
    },
    {
      path: "/auction/new",
      name: "createAuction",
      components: {
        header: AppHeader,
        default: CreateAuction,
        footer: AppFooter,
      },
    },
    {
      path: "/auction/detail",
      name: "AuctionDetail",
      components: {
        header: AppHeader,
        default: AuctionDetail,
        footer: AppFooter,
      },
    },
    {
      path: "/credit",
      name: "Credit",
      components: {
        header: AppHeader,
        default: Credit,
        footer: AppFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
