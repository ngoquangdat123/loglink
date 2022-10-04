<template>
  <card class="auction-item" hover shadow body-classes="p-0">
    <a @click="onViewDetail(item.id)">
      <div class="card-body">
        <p class="font-weight-bold">
          {{ item.origin }} - {{ item.destination }}
        </p>
        <p>Mở: {{ item.opening }}</p>
        <p>Đóng: {{ item.closing }}</p>
        <p>Số container: {{ item.numberOfContainer }}</p>
        <p>Mô tả: {{ item.commodityDescription }}</p>
        <p>MÃ HS: {{ item.hsCode }}</p>
      </div>
    </a>
  </card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  methods: {
    onViewDetail (id) {
      this.$router.push(`/auction/detail?id=${id}`)
    }
  }
}
</script>

<style scoped lang="scss">
.auction-item {
  background: #000000;
  cursor: pointer;
  background-image: url('/img/auction/bg-auction.png');
  background-size: cover;
  .card-body {
    color: #ffffff;
    p {
      white-space: nowrap;
      text-overflow: hidden;
      overflow: ellipsis;
    }
  }
}
</style>
