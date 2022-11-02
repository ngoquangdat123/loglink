<template>
  <div class="container auction">
    <div class="auction__header">
      <h3>Danh Sách đấu giá</h3>
      <button
        type="button"
        class="btn btn-3 btn-icon btn-primary"
        @click="$router.push('/auction/new')"
      >
        <span class="btn-inner--icon"><i class="ni ni-fat-add" /></span
        ><span class="btn-inner--text">Thêm mới</span>
      </button>
    </div>
    <div class="auction__search">
      <base-input
        placeholder="Search"
        v-model="query"
        addon-right-icon="ni ni-fat-remove"
        class="mb-0"
      >
      </base-input>
    </div>
    <div v-if="auctionFilters && auctionFilters.length" class="row">
      <div
        v-for="(item, i) in auctionFilters"
        :key="i"
        class="col-sm-4 col 6 mb-4"
      >
        <AuctionItem :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import { auctionService } from "../../../services/auction.service";
import AuctionItem from "./auction-item.vue";
export default {
  components: {
    AuctionItem,
  },
  data() {
    return {
      auctions: [],
      auctionFilters: [],
      query: "",
    };
  },
  created() {
    this.getAuctions();
  },
  watch: {
    query(val) {
      this.auctionFilters = this.auctions.filter((item) => {
        return (
          item.origin.toLowerCase().includes(val.toLowerCase()) ||
          item.destination.toLowerCase().includes(val.toLowerCase())
        );
      });
    },
  },
  methods: {
    async getAuctions() {
      this.auctions = await auctionService.getAuction();
      this.auctionFilters = this.auctions;
    },
  },
};
</script>
<style lang="scss" scoped>
.auction {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    h3 {
      text-transform: uppercase;
    }
  }
  &__search {
    margin-bottom: 2rem;
  }
}
</style>
