<template>
  <div>
    <Banner></Banner>
    <OurKeyService></OurKeyService>
    <WhyChoose />
    <Faq />
    <CallToAction />
  </div>
</template>
<script>
import Banner from "./components/Home/Banner";
import OurKeyService from "./components/Home/OurKeyService";
import WhyChoose from "./components/Home/WhyChoose";
import Faq from "./components/Home/Faq.vue";
import CallToAction from "./components/Home/CallToAction";

export default {
  name: "components",
  components: {
    Banner,
    OurKeyService,
    WhyChoose,
    Faq,
    CallToAction
  },
};
</script>
