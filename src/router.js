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
// Auction
import Auction from "./views/auction";
import RequirePrice from "./views/require-price/index.vue";
import CreateAuction from "./views/auction/create-auction";
import UploadQuoteSea from "./views/upload-quote/upload-quote-sea";
import UploadQuoteTrucking from "./views/upload-quote/upload-quote-trucking";
import UpdateAuction from "./views/auction/update-auction";
import AuctionDetail from "./views/auction/detail";
import CreateBid from "./views/auction/create-bid";
import ShowBid from "./views/auction/show-bid";

// Credit
import Credit from "./views/credit";

// UserProfile
import UserProfile from './views/user-profile/index.vue'
import UserProfileCreate from './views/user-profile/create.vue'
import UserProfileUpdate from './views/user-profile/update.vue'
import UserProfileDetail from './views/user-profile/detail.vue'

// TransportRoute
import TransportRoute from './views/transport-route/index'
import TransportRouteCreate from './views/transport-route/create.vue'
import TransportRouteUpdate from './views/transport-route/update.vue'
import TransportRouteDetail from './views/transport-route/detail.vue'

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
      path: "/upload-quote-sea",
      name: "uploadQuoteSea",
      components: {
        header: AppHeader,
        default: UploadQuoteSea,
        footer: AppFooter,
      },
    },
    {
      path: "/upload-quote-trucking",
      name: "uploadQuoteTrucking",
      components: {
        header: AppHeader,
        default: UploadQuoteTrucking,
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
    {
      path: "/user-profile",
      name: "UserProfile",
      components: {
        header: AppHeader,
        default: UserProfile,
        footer: AppFooter,
      }
    },
    {
      path: "/user-profile/new",
      name: "UserProfileCreate",
      components: {
        header: AppHeader,
        default: UserProfileCreate,
        footer: AppFooter,
      }
    },
    {
      path: "/user-profile/detail",
      name: "UserProfileDetail",
      components: {
        header: AppHeader,
        default: UserProfileDetail,
        footer: AppFooter,
      }
    },
    {
      path: "/user-profile/edit",
      name: "UserProfileUpdate",
      components: {
        header: AppHeader,
        default: UserProfileUpdate,
        footer: AppFooter,
      }
    },
    {
      path: "/transport-route",
      name: "TransportRoute",
      components: {
        header: AppHeader,
        default: TransportRoute,
        footer: AppFooter,
      }
    },
    {
      path: "/transport-route/new",
      name: "TransportRouteCreate",
      components: {
        header: AppHeader,
        default: TransportRouteCreate,
        footer: AppFooter,
      }
    },
    {
      path: "/transport-route/detail",
      name: "TransportRouteDetail",
      components: {
        header: AppHeader,
        default: TransportRouteDetail,
        footer: AppFooter,
      }
    },
    {
      path: "/transport-route/edit",
      name: "TransportRouteUpdate",
      components: {
        header: AppHeader,
        default: TransportRouteUpdate,
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
