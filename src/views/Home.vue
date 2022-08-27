<template>
  <div>
    <Banner></Banner>
    <OurKeyService></OurKeyService>
  </div>
</template>
<script>
import Banner from "./components/Home/Banner";
import OurKeyService from "./components/Home/OurKeyService";

export default {
  name: "components",
  components: {
    Banner,
    OurKeyService,
  },
};
</script>
