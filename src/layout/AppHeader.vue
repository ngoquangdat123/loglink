<template>
  <header class="header-global">
    <section class="top-toolbar">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-6">
            <div class="toolbar-left">
              <ul class="one">
                <li>
                  <a href="#">
                    <span>
                      <i class="icofont icofont-phone"></i>
                    </span>
                    +0125369523
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i class="icofont icofont-envelope"></i>
                    </span>
                    demo@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i class="icofont icofont-social-google-map"></i>
                    </span>
                    123, Vuter goli, New yeork
                  </a>
                </li>
              </ul>
              <ul class="two">
                <li>
                  <a href="#">
                    <span>
                      <i class="fa fa-phone"></i>
                    </span>
                    +8523684
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i class="fa fa-mail"></i>
                    </span>
                    demo@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i class="fa fa-map-marker"></i>
                    </span>
                    123, Vuter goli, New yeork
                  </a>
                </li>
              </ul>
              <ul class="three">
                <li>
                  <a href="#">
                    <span>
                      <i class="fa fa-phone"></i>
                    </span>
                    +5258569
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i class="fa fa-mail"></i>
                    </span>
                    demo@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i class="fa fa-map-marker"></i>
                    </span>
                    123, Vuter goli, New yeork
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4 col-md-6">
            <div class="toolbar-right">
              <div class="top-office-select-area">
                <div class="select-container">
                  <span>
                    <i class="fa fa-globe"></i>
                  </span>
                  <div class="select-area">
                    <select>
                      <option value="1">New York</option>
                      <option value="2">New Jersey</option>
                      <option value="3">New Mexico</option>
                    </select>
                    <div class="sSelect down"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-menu-area">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-12 d-flex align-items-center">
            <div class="">
              <a href="#/">
                <img
                  src="/img/home/logo-black.png"
                  alt=""
                  style="width: 120px !important"
                />
              </a>
            </div>
          </div>
          <div class="col-md-9 col-sm-12">
            <base-nav class="navbar-main" type="" effect="light" expand>
              <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" />
              </router-link>

              <div class="row" slot="content-header" slot-scope="{ closeMenu }">
                <div class="col-6 collapse-brand">
                  <a href="../index.html">
                    <img src="img/brand/blue.png" />
                  </a>
                </div>
                <div class="col-6 collapse-close">
                  <close-button @click="closeMenu"></close-button>
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
                    <i class="ni ni-collection d-lg-none"></i>
                    <span class="nav-link-inner--text">Services</span>
                  </a>
                  <div class="dropdown-menu">
                    <router-link to="/auction" class="dropdown-item"
                      >Auction</router-link
                    >
                    <router-link to="/#" class="dropdown-item"
                      >Tải lên báo giá đường biển</router-link
                    >
                    <router-link to="/#" class="dropdown-item"
                      >Tải lên báo giá đường bộ</router-link
                    >
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link"
                    data-toggle="dropdown"
                    role="button"
                  >
                    <i class="ni ni-collection d-lg-none"></i>
                    <span class="nav-link-inner--text">NEWS</span>
                  </a>
                  <div class="dropdown-menu">
                    <router-link to="/#" class="dropdown-item"
                      >Blog Grid View</router-link
                    >
                    <router-link to="/#" class="dropdown-item"
                      >Blog Grid View</router-link
                    >
                    <router-link to="/#" class="dropdown-item"
                      >Blog Grid View</router-link
                    >
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link"
                    data-toggle="dropdown"
                    role="button"
                  >
                    <i class="ni ni-collection d-lg-none"></i>
                    <span class="nav-link-inner--text">GALLERY</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link"
                    data-toggle="dropdown"
                    role="button"
                  >
                    <i class="ni ni-collection d-lg-none"></i>
                    <span class="nav-link-inner--text">Contact</span>
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item d-none d-lg-block ml-lg-4">
                  <div class="btn-wrapper">
                    <router-link to="/login" class="btn btn-success">
                      Login Page
                    </router-link>
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
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
};
</script>
<style lang="scss" scoped src="../assets/scss/layout/header.scss">
.header-global {
  .navbar-main {
    background: #131313;
  }
}
</style>>
