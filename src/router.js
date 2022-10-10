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
import RequirePrice from "./views/auction/require-price";
import CreateAuction from "./views/auction/create-auction";
import UpdateAuction from "./views/auction/update-auction";
import AuctionDetail from "./views/auction/detail";
import CreateBid from "./views/auction/create-bid";
import ShowBid from "./views/auction/show-bid";
import Credit from "./views/credit";

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      path: "/rfq",
      name: "auction",
      components: {
        header: AppHeader,
        default: RequirePrice,
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
      path: "/auction/update",
      name: "updateAuction",
      components: {
        header: AppHeader,
        default: UpdateAuction,
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
    {
      path: "/create-bid",
      name: "CreateBid",
      components: {
        header: AppHeader,
        default: CreateBid,
        footer: AppFooter,
      },
    },
    {
      path: "/show-bid",
      name: "CreateBid",
      components: {
        header: AppHeader,
        default: ShowBid,
        footer: AppFooter,
      }
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
