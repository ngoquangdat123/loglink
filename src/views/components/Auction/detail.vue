<template>
  <div class="container detail-auction">
    <div class="detail-auction__header">
      <h3>Chi tiết bản đấu giá</h3>
    </div>
    <div class="detail-auction__content">
      <div class="row"></div>
    </div>
  </div>
</template>
<script>
import { auctionService } from "../../../services/auction.service";
export default {
  components: {},
  data() {
    return {
      auction: {},
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      const id = this.$route.query.id;
      this.auction = await auctionService.getAuctionById(id);
    },
  },
};
</script>
<style lang="scss" scoped>
.detail-auction {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
}
</style>>
