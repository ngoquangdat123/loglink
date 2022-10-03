<template>
  <div class="container detail-auction">
    <div class="detail-auction__header">
      <h2 class="text-center">Chi tiết bản đấu giá</h2>
    </div>
    <div class="detail-auction__content">
      <div class=""></div>
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
    justify-content: center;
    margin-bottom: 3rem;
    h2 {
      font-size: 3.3rem;
      font-weight: 600;
      line-height: 1.3;
    }
  }
}
</style>>
