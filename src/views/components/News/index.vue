<template>
  <section class="section section-shaped section-lg my-0">
    <div></div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getDataNews();
  },
  methods: {
    async getDataNews() {
      try {
        const response = await axios.get(
          `http://206.189.155.165:8080/api/v1/news?page=1&paging=27&language_code=vi`
        );
        this.list = response.data.data;
      } catch (error) {
        console.log("e", error);
      }
    },
  },
};
</script>
<style>
</style>
