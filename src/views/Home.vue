<template>
  <div>
    <Banner></Banner>
    <OurKeyService></OurKeyService>
    <WhyChoose />
  </div>
</template>
<script>
import Banner from "./components/Home/Banner";
import OurKeyService from "./components/Home/OurKeyService";
import WhyChoose from "./components/Home/WhyChoose";

export default {
  name: "components",
  components: {
    Banner,
    OurKeyService,
    WhyChoose,
  },
};
</script>
