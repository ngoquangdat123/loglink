<template>
  <header class="header-global">
    <section class="main-menu-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <base-nav class="navbar-main" type="" effect="dark" expand>
              <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img
                    src="/img/home/logo-black.png"
                    alt=""
                    style="width: 120px !important"
                >
              </router-link>

              <div slot="content-header" slot-scope="{ closeMenu }" class="row">
                <div class="col-6 collapse-brand">
                  <a href="../index.html">
                    <img src="img/brand/blue.png">
                  </a>
                </div>
                <div class="col-6 collapse-close">
                  <close-button @click="closeMenu" />
                </div>
              </div>

              <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link"
                    data-toggle="dropdown"
                    role="button"
                  >
                    <i class="ni ni-collection d-lg-none" />
                    <span class="nav-link-inner--text">Services</span>
                  </a>
                  <div class="dropdown-menu">
                    <router-link to="/auction" class="dropdown-item">
                      Auction
                    </router-link>
                    <router-link to="/upload-quote-sea" class="dropdown-item">
                      Tải lên báo giá đường biển
                    </router-link>
                    <router-link to="/upload-quote-trucking" class="dropdown-item">
                      Tải lên báo giá đường bộ
                    </router-link>
                    <router-link to="/rfq" class="dropdown-item">
                      Yêu cầu báo giá
                    </router-link>
                    <router-link to="/user-profile" class="dropdown-item">
                      User Profile
                    </router-link>
                    <router-link to="/transport-route" class="dropdown-item">
                      Tuyến vận tải
                    </router-link>
                    <router-link to="/auction-nominated-bidder" class="dropdown-item">
                      Auction Nominated Bidder
                    </router-link>
                    <router-link to="/credit" class="dropdown-item">
                      Credit
                    </router-link>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link"
                    data-toggle="dropdown"
                    role="button"
                  >
                    <i class="ni ni-collection d-lg-none" />
                    <span class="nav-link-inner--text">News</span>
                  </a>
                  <div class="dropdown-menu">
                    <router-link to="/#" class="dropdown-item">
                      Blog Grid View
                    </router-link>
                    <router-link to="/#" class="dropdown-item">
                      Blog Grid View
                    </router-link>
                    <router-link to="/#" class="dropdown-item">
                      Blog Grid View
                    </router-link>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link"
                    data-toggle="dropdown"
                    role="button"
                  >
                    <i class="ni ni-collection d-lg-none" />
                    <span class="nav-link-inner--text">Gallery</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link"
                    data-toggle="dropdown"
                    role="button"
                  >
                    <i class="ni ni-collection d-lg-none" />
                    <span class="nav-link-inner--text">Contact</span>
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item d-none d-lg-block ml-lg-4">
                  <div
                    v-if="!Object.keys(currentUser).length"
                    class="btn-wrapper"
                  >
                    <router-link to="/login" class="btn btn-success">
                      Login Page
                    </router-link>
                  </div>
                  <div v-else class="user-logged desktop">
                    <div class="user-logged__header">
                      <div class="information">
                        <img
                          alt="Circle image"
                          class="img-fluid rounded-circle shadow avatar"
                          data-src="img/theme/team-2-800x800.jpg"
                          src="img/theme/team-2-800x800.jpg"
                        >
                        <div class="arrow-down" />
                        <div class="information__content">
                          <ul class="list-menu">
                            <li class="item">
                              <router-link
                                class="nav-link"
                                :to="'/account/settings'"
                              >
                                <span class="fa fa-cog" />
                                <span class="name">Cài đặt</span>
                              </router-link>
                            </li>
                            <li class="item">
                              <router-link
                                class="nav-link"
                                :to="'/account/forgot-pass'"
                              >
                                <span class="fa fa-key" />
                                <span class="name">Quên mật khẩu</span>
                              </router-link>
                            </li>
                            <li class="item">
                              <a class="nav-link log-out" @click="onLogout">
                                <span class="fa fa-sign-out" />
                                <span class="name">Đăng xuất</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </base-nav>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>
<script>
import BaseNav from '@/components/BaseNav'
import CloseButton from '@/components/CloseButton'
import { mapActions } from 'vuex'
import globalMixins from '../mixins/global'
export default {
  components: {
    BaseNav,
    CloseButton
  },
  mixins: [globalMixins],
  methods: {
    ...mapActions('account', ['logout']),
    onLogout () {
      this.logout()
    }
  }
}
</script>
<style lang="scss" scoped src="../assets/scss/layout/header.scss">
.header-global {
  .navbar-main {
    background: #131313;
  }
}
.main-menu-area {
  background: beige;
}
</style>

