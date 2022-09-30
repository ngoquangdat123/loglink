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
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    onViewDetail(id) {
      this.$router.push(`/auction/detail?id=${id}`);
    },
  },
};
</script>

<style scoped lang="scss">
.auction-item {
  cursor: pointer;
}
</style>
