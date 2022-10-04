<template>
  <div class="container detail-auction">
    <div class="detail-auction__header">
      <h2 class="text-center">Chi tiết bản đấu giá #{{ item.id }}</h2>
    </div>
    <div class="detail-auction__content shadow">
      <div class="detail-auction__breadcrumb">
        <a @click="$router.push('/auction')">
          <img src="img/auction/icon-back.svg" class="icon-back">
          <span>Back to auction list</span>
        </a>
      </div>
      <div class="content-top">
        <div class="top-item">
          <img src="img/auction/icon-plain.png" class="icon-start">
          <span class="value">{{ item.origin }}</span>
        </div>
        <div id="arrowAnim">
          <div class="arrowSliding">
            <div class="arrow" />
          </div>
          <div class="arrowSliding delay1">
            <div class="arrow" />
          </div>
          <div class="arrowSliding delay2">
            <div class="arrow" />
          </div>
          <div class="arrowSliding delay3">
            <div class="arrow" />
          </div>
        </div>
        <div class="top-item">
          <img src="img/auction/icon-plain.png" class="icon-end">
          <span class="value">{{ item.destination }}</span>
        </div>
      </div>
      <div class="content-card">
        <div class="item-field">
          <span class="label">Opening: </span>
          <span class="value">{{ item.opening }}</span>
        </div>
        <div class="item-field">
          <span class="label">Closing: </span>
          <span class="value">{{ item.closing }}</span>
        </div>
        <div class="item-field">
          <span class="label">Request Date: </span>
          <span class="value">{{ item.requestDate }}</span>
        </div>
        <div class="item-field">
          <span class="label">Number Of Container: </span>
          <span class="value">{{ item.numberOfContainer }}</span>
        </div>
        <div class="item-field">
          <span class="label">Packing: </span>
          <span class="value">{{ item.packing }}</span>
        </div>
        <div class="item-field">
          <span class="label">Expected Offer: </span>
          <span class="value">{{ item.expectedOffer }}</span>
        </div>
        <div class="item-field">
          <span class="label">Preferred Shipping Line: </span>
          <span class="value">{{ item.preferredShippingLine }}</span>
        </div>
        <div class="item-field">
          <span class="label">Avoid Shipping Line: </span>
          <span class="value">{{ item.avoidShippingLine }}</span>
        </div>
        <div class="item-field">
          <span class="label">Max Transit Time: </span>
          <span class="value">{{ item.maxTransitTime }}</span>
        </div>
        <div class="item-field">
          <span class="label">Etd: </span>
          <span class="value">{{ item.etd }}</span>
        </div>
        <div class="item-field">
          <span class="label">Eta: </span>
          <span class="value">{{ item.eta }}</span>
        </div>
        <div class="item-field">
          <span class="label">Tranship: </span>
          <span class="value">{{ item.tranship }}</span>
        </div>
        <div class="item-field">
          <span class="label">Weight: </span>
          <span class="value">{{ item.weight }}</span>
        </div>
        <div class="item-field">
          <span class="label">Cbm: </span>
          <span class="value">{{ item.tranship }}</span>
        </div>
        <div class="item-field">
          <span class="label">Number Of Package: </span>
          <span class="value">{{ item.numberOfPackage }}</span>
        </div>
        <div class="item-field">
          <span class="label">Length: </span>
          <span class="value">{{ item.length }}</span>
        </div>
        <div class="item-field">
          <span class="label">Width: </span>
          <span class="value">{{ item.width }}</span>
        </div>
        <div class="item-field">
          <span class="label">Height: </span>
          <span class="value">{{ item.height }}</span>
        </div>
        <div class="item-field">
          <span class="label">Remark: </span>
          <span class="value">{{ item.remark }}</span>
        </div>
        <div class="item-field">
          <span class="label">Closed: </span>
          <span class="value">{{ item.closed }}</span>
        </div>

        <div class="item-field">
          <span class="label">Lowest Price: </span>
          <span class="value">{{ item.lowestPrice }}</span>
        </div>

        <div class="item-field">
          <span class="label">Term: </span>
          <span class="value">{{ item.term }}</span>
        </div>

        <div class="item-field">
          <span class="label">Commodity Description: </span>
          <span class="value">{{ item.commodityDescription }}</span>
        </div>

        <div class="item-field">
          <span class="label">Hs Code: </span>
          <span class="value">{{ item.hsCode }}</span>
        </div>
        <div class="item-field">
          <span class="label">Total Distance Km: </span>
          <span class="value">{{ item.totalDistanceKm }}</span>
        </div>
        <div class="item-field">
          <span class="label">Origin Port: </span>
          <span class="value">{{ item.originPort }}</span>
        </div>
        <div class="item-field">
          <span class="label">Destination Port: </span>
          <span class="value">{{ item.destinationPort }}</span>
        </div>
        <div class="item-field">
          <span class="label">Ref: </span>
          <span class="value">{{ item.ref }}</span>
        </div>
        <div class="item-field">
          <span class="label">Container Type: </span>
          <span class="value">{{ item.containerTypeDetails }}</span>
        </div>
        <div class="item-field">
          <span class="label">Requestor: </span>
          <span class="value">{{ item.requestorLogin }}</span>
        </div>
        <div class="item-field">
          <span class="label">Transport Method: </span>
          <span class="value">{{ item.transportMethodTransportMethod }}</span>
        </div>
        <div class="item-field">
          <span class="label">Winner Id: </span>
          <span class="value">{{ item.winnerIdLogin }}</span>
        </div>
      </div>
      <div class="detail-auction__action">
        <button type="button" class="btn btn-primary">Báo giá</button>
        <button type="button" class="btn btn-primary">Xem báo giá</button>
        <button type="button" class="btn btn-primary">Cập nhật</button>
        <button type="button" class="btn btn-danger">Xóa</button>
      </div>
    </div>
  </div>
</template>
<script>
import { auctionService } from '../../../services/auction.service'
export default {
  components: {},
  data () {
    return {
      item: {}
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    async getDetail () {
      const id = this.$route.query.id
      this.item = await auctionService.getAuctionById(id)
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-auction {
  &__header {
    margin-bottom: 4rem;
    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.3;
      text-align: center;
    }
  }
  &__breadcrumb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    img {
      margin-right: 5px;
    }
    a {
      cursor: pointer;
      font-weight: 600;
    }
  }
  &__content {
    background-color: #fff;
    background-clip: border-box;
    border: 0.0625rem solid rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;
    padding: 2rem;
    .content-top {
      padding: 0 100px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      img {
        width: 50px;
      }
      .icon-end {
        transform: rotate(75deg);
      }
      .top-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 20px;
        line-height: 25px;
        font-weight: 700;
        margin-top: 10px;
      }
      #arrowAnim {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .arrow {
        width: 20px;
        height: 20px;
        border: 5px solid;
        border-color: black transparent transparent black;
        transform: rotate(135deg);
      }

      .arrowSliding {
        position: absolute;
        -webkit-animation: slide 4s linear infinite;
        animation: slide 4s linear infinite;
      }

      .delay1 {
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
      }
      .delay2 {
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
      }
      .delay3 {
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
      }

      @-webkit-keyframes slide {
        0% {
          opacity: 0;
          transform: translateX(-10vw);
        }
        20% {
          opacity: 1;
          transform: translateX(-5vw);
        }
        80% {
          opacity: 1;
          transform: translateX(5vw);
        }
        100% {
          opacity: 0;
          transform: translateX(10vw);
        }
      }
      @keyframes slide {
        0% {
          opacity: 0;
          transform: translateX(-10vw);
        }
        20% {
          opacity: 1;
          transform: translateX(-5vw);
        }
        80% {
          opacity: 1;
          transform: translateX(5vw);
        }
        100% {
          opacity: 0;
          transform: translateX(10vw);
        }
      }
    }
    .item-field {
      display: flex;
      align-content: center;
      border-bottom: solid 1px #bdbdbd38;
      padding: 1rem 0;
      .label {
        font-weight: 700;
        width: 300px;
      }
      &:last-child {
        border: none;
        padding-bottom: 0;
      }
    }
  }
  &__action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    .btn {
      border-radius: 0;
    }
  }
}
</style>
