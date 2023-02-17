<template>
  <div class="container credit">
    <div class="credit__header">
      <h3>Credits</h3>
      <button
        type="button"
        class="btn btn-3 btn-icon btn-primary"
        @click="$router.push('/credit/new')"
      >
        <span class="btn-inner--icon"><i class="ni ni-fat-add" /></span><span class="btn-inner--text">Thêm mới</span>
      </button>
    </div>
    <div >
      <b-table  hover :items="credits" :fields="fields" head-variant="light">
        <template #cell(action)="data">
          <button type="button" @click="$router.push(`/credit/detail/${data.item.id}`)" class="btn btn-primary">Xem</button>
          <button type="button" class="btn btn-warning">Sửa</button>
          <button type="button" class="btn btn-danger">xóa</button>
      </template>
      </b-table>
    </div>
  </div>
</template>
<script>
import { creditService } from '../../../services/credit.service'
export default {
  components: {
  },
  data () {
    return {
      credits: [],
      fields: ['id', 'credit', 'userCreditLogin', 'Action'],
    }
  },
  created () {
    this.getCredit()
  },
  methods: {
    async getCredit () {
      this.credits = await creditService.getCredit()
    }
  }
}
</script>
<style lang="scss" scoped>
.credit {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    h3 {
      text-transform: uppercase;
    }
  }
  .btn {
    border-radius: 0;
  }
  /deep/ th {
    &:last-child {
      text-align: right;
    }
  }
  /deep/ td {
    &:last-child {
      text-align: right;
    }
    .btn {
      height: 40px;
    }
  }
}
</style>
