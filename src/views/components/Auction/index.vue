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
          this.removeVietnameseTones(item.origin)
            .toLowerCase()
            .includes(this.removeVietnameseTones(val).toLowerCase()) ||
          this.removeVietnameseTones(item.destination)
            .toLowerCase()
            .includes(this.removeVietnameseTones(val).toLowerCase())
        );
      });
    },
  },
  methods: {
    async getAuctions() {
      this.auctions = await auctionService.getAuction();
      this.auctionFilters = this.auctions;
    },
    removeVietnameseTones(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      // Some system encode vietnamese combining accent as individual utf-8 characters
      // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
      str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
      // Remove extra spaces
      // Bỏ các khoảng trắng liền nhau
      str = str.replace(/ + /g, " ");
      str = str.trim();
      // Remove punctuations
      // Bỏ dấu câu, kí tự đặc biệt
      str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        " "
      );
      return str;
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
