<template>
  <div class="container auction">
    <div class="auction__header">
      <h3>Danh Sách đấu giá</h3>
      <button
        type="button"
        class="btn btn-3 btn-icon btn-success"
        @click="$router.push('/auction/new')"
      >
        <span class="btn-inner--icon"><i class="ni ni-fat-add" /></span><span class="btn-inner--text">Thêm mới một đấu giá</span>
      </button>
    </div>
    <div v-if="auctions && auctions.length" class="row">
      <div v-for="(item, i) in auctions" :key="i" class="col-sm-4 col 6 mb-4">
        <AuctionItem :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import { auctionService } from '../../../services/auction.service'
import AuctionItem from './auction-item.vue'
export default {
  components: {
    AuctionItem
  },
  data () {
    return {
      auctions: []
    }
  },
  created () {
    this.getAuctions()
  },
  methods: {
    async getAuctions () {
      this.auctions = await auctionService.getAuction()
    }
  }
}
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
}
</style>
>
