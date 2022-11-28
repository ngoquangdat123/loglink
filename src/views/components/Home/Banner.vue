<template>
  <section class="section overflow-hidden my-0 pt-0">
    <div class="py-0 pb-lg">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-12 mb-lg-auto">
          <div class="rounded shadow-lg overflow-hidden">
            <b-carousel
              id="carousel1"
              controls
              indicators
              style="height: 700px"
            >
              <b-carousel-slide
                img-src="/img/home/banner-1.jpg"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="/img/home/banner-2.jpg"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="/img/home/banner-3.jpg"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="/img/home/banner-4.jpg"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
};
</script>
<style lang="scss" scoped>
</style>>
