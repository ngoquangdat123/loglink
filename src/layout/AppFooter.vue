<template>
  <footer class="footer">
    <div class="footer_top">
      <div class="container">
        <div class="row">
          <div class="footer_widget_area">
            <ul>
              <li>
                <div class="single-footer-widget">
                  <div class="footer-logo">
                    <div class="footer-brand-logo">
                      <a href="/">
                        <img
                          src="/img/home/logo-black.png"
                          alt=""
                          width="120"
                        >
                      </a>
                    </div>
                  </div>
                  <div class="footer-widget-body">
                    <div class="footer-info-text">
                      <p>
                        Lorem ipsum dolor sit co optio ipsam incidunt, adipisci
                        asperiores.
                      </p>
                    </div>
                    <div class="footer-subscribe">
                      <form action="#">
                        <div class="form-group">
                          <input type="text" placeholder="Enter your mail">
                          <button type="submit">
                            <i class="fa fa-envelope" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="single-footer-widget">
                  <div class="widget-title">
                    <h5>Helpful links</h5>
                  </div>
                  <div class="widget-body">
                    <div class="helpful-link-body">
                      <ul>
                        <li><a href="#"> Air Frieght </a></li>
                        <li><a href="#"> Ground Shipping </a></li>
                        <li><a href="#"> Container Shipping </a></li>
                        <li><a href="#"> Supply Chain </a></li>
                        <li><a href="#"> Rail Shipping </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="single-footer-widget">
                  <div class="widget-title">
                    <h5>Recent News</h5>
                  </div>
                  <div class="widget-body">
                    <div class="footer-news">
                      <ul>
                        <li>
                          <div class="footer-news-date">
                            <span> 12 </span> Feb
                          </div>
                          <div class="footer-news-text">
                            <a href="#">
                              Lorem ipsum dolor sit adipisicing elit.
                            </a>
                            <p>
                              <i class="icofont icofont-clock-time" /> 24 min
                              ago
                            </p>
                          </div>
                        </li>
                        <li>
                          <div class="footer-news-date">
                            <span> 12 </span> Feb
                          </div>
                          <div class="footer-news-text">
                            <a href="#">
                              Lorem ipsum dolor sit adipisicing elit.
                            </a>
                            <p>
                              <i class="icofont icofont-clock-time" /> 24 min
                              ago
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="single-footer-widget">
                  <div class="footer-info-body">
                    <div class="widget-title">
                      <h5>Find our location</h5>
                    </div>
                    <ul>
                      <li>
                        <div class="footer-info-icon">
                          <i class="fa fa-home" />
                        </div>
                        <div class="footer-info-text">
                          123 Eccles Old Road, Salford Road, East London, Uk, M6
                          7AF
                        </div>
                      </li>
                      <li>
                        <div class="footer-info-icon">
                          <i class="fa fa-envelope" />
                        </div>
                        <div class="footer-info-text">
                          support@yourdomain.com
                        </div>
                      </li>
                      <li>
                        <div class="footer-info-icon">
                          <i class="fa fa-phone" />
                        </div>
                        <div class="footer-info-text">+02154485425</div>
                      </li>
                    </ul>
                  </div>
                  <div class="footer-social-icon">
                    <div class="social-icon">
                      <ul>
                        <li>
                          <a href="#"> <i class="fa fa-facebook" /> </a>
                        </li>
                        <li>
                          <a href="#"> <i class="fa fa-twitter" /> </a>
                        </li>
                        <li>
                          <a href="#"> <i class="fa fa-linkedin" /> </a>
                        </li>
                        <li>
                          <a href="#"> <i class="fa fa-rss" /> </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container-lg container py-3">
        <div class="row align-items-center justify-content-md-between">
          <div class="col-md-6">
            <div class="copyright">
              <a href="#" target="_blank" rel="noopener">Copyright</a>
              &copy; {{ year }}
              &
              <a href="#" target="_blank" rel="noopener">Log Link</a>
            </div>
          </div>
          <div class="col-md-6">
            <ul class="nav nav-footer justify-content-end">
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                >Home</a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                >Services</a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                >Tracking</a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                >Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  padding-bottom: 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer_widget_area > ul {
    display: flex;
    flex-flow: row;
  }

  .footer_widget_area > ul > li {
    width: 25%;
    padding-left: 15px;
    padding-right: 15px;
  }

  .footer_top {
    background: #fefefe;
    position: relative;
    padding-bottom: 80px;
  }

  .single-footer-widget {
    padding-top: 100px;
    position: relative;
    z-index: 9;
  }

  .widget-title h5 {
    color: #333;
    font-size: 22px;
    font-weight: 600;
  }

  .footer-info-body ul {
    padding-top: 38px;
  }

  .footer-info-body ul li {
    margin-bottom: 15px;
  }

  .footer-info-body ul li .footer-info-icon {
    display: inline-block;
    margin-right: 25px;
    float: left;
  }

  .footer-info-body ul li .footer-info-icon i {
    color: #333;
    font-size: 18px;
  }

  .footer-info-body ul li .footer-info-text {
    color: #777;
    display: table;
    font-family: "poppins-regular";
    font-size: 14px;
    line-height: 26px;
  }

  .footer-info-text p {
    color: #777;
    font-family: "poppins-regular";
    font-size: 14px;
    line-height: 29px;
  }

  .footer-subscribe {
    padding-top: 15px;
  }

  .footer-subscribe .form-group {
    height: 50px;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .footer-subscribe .form-group button {
    background: #ffc434 none repeat scroll 0 0;
    border: 0 none;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    width: 53px;
  }

  .footer-subscribe .form-group button i {
    color: #444;
    font-size: 25px;
    line-height: 39px;
  }

  .footer-subscribe .form-group input {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #ffc434;
    color: #777;
    font-family: "poppins-regular";
    font-size: 14px;
    height: 50px;
    padding-left: 15px;
    width: calc(100% - 42px);
  }

  .helpful-link-body {
    padding-top: 32px;
  }

  .helpful-link-body ul li a {
    color: #777;
    display: block;
    font-family: "poppins-regular";
    font-size: 14px;
    line-height: 35px;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  .helpful-link-body ul li a:hover {
    color: #ffc434;
  }

  .footer-news {
    padding-top: 45px;
  }

  .footer-news ul li {
    margin-bottom: 18px;
  }

  .footer-news ul li .footer-news-date {
    background: #ffc434 none repeat scroll 0 0;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    color: #333;
    float: left;
    font-size: 12px;
    font-weight: 300;
    height: 45px;
    margin-right: 20px;
    text-align: center;
    width: 45px;
  }

  .footer-news ul li .footer-news-date span {
    color: #333;
    display: block;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }

  .footer-news ul li .footer-news-text {
    display: table;
  }

  .footer-news ul li .footer-news-text a {
    color: #777;
    display: inline-block;
    font-family: "poppins-regular";
    font-size: 14px;
    line-height: 29px;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  .footer-news ul li .footer-news-text a:hover {
    color: #ffc434;
  }

  .footer-news ul li:last-child {
    margin-bottom: 0;
  }

  .footer-news ul li .footer-news-text p {
    color: #333;
    font-size: 11px;
    font-weight: 300;
    line-height: 25px;
  }

  .footer-news ul li .footer-news-text p i {
    color: #333;
    font-size: 12px;
  }

  .footer-social-icon {
    padding-top: 7px;
  }

  .footer-logo {
    padding-bottom: 35px;
  }

  .social-icon ul {
    padding-left: 47px;
  }

  .social-icon ul li {
    background: #eee none repeat scroll 0 0;
    border: 1px solid #fff;
    display: inline-block;
    height: 35px;
    margin-right: 5px;
    text-align: center;
    width: 35px;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;
  }

  .social-icon ul li a {
    display: block;
  }
  .social-icon ul li:hover {
    background: #ffc434;
  }
  .social-icon ul li a i {
    color: #333;
    font-size: 18px;
    line-height: 34px;
  }

  &__bottom {
    background: #131313;
    .copyright {
      color: #ffffff;
    }
    a {
      color: #ffffff;
    }
    .nav-link {
      color: #ffffff !important;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .footer_widget_area > ul {
      width: 100%;
      display: block;
    }
    .footer_widget_area > ul > li {
      width: 50%;
      float: left;
    }
  }
  @media only screen and (max-width: 767px) {
    .footer_widget_area > ul {
      width: 100%;
      display: block;
    }
    .footer_widget_area > ul > li {
      width: 100%;
      float: left;
    }
  }
}
</style>
