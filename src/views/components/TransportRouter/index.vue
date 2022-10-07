<template>
  <div class="container transport">
    <div class="transport__header">
      <h3>Transports</h3>
      <button
        type="button"
        class="btn btn-3 btn-icon btn-primary"
        @click="$router.push('/transport/new')"
      >
        <span class="btn-inner--icon"><i class="ni ni-fat-add" /></span><span class="btn-inner--text">Thêm mới</span>
      </button>
    </div>
    <div >
      <b-table  hover :items="transports" :fields="fields" head-variant="light">
        <template #cell(action)="data">
          <button type="button" @click="$router.push(`/transport/detail/${data.item.id}`)" class="btn btn-primary">Xem</button>
          <button type="button" class="btn btn-warning">Sửa</button>
          <button type="button" class="btn btn-danger">xóa</button>
      </template>
      </b-table>
    </div>
  </div>
</template>
<script>
import { transportService } from '../../../services/transport.service'
export default {
  components: {
  },
  data () {
    return {
      transports: [],
      fields: ['id', 'transport', 'usertransportLogin', 'Action'],
    }
  },
  created () {
    this.getTransport()
  },
  methods: {
    async getTransport () {
      this.transports = await transportService.getTransport()
    }
  }
}
</script>
<style lang="scss" scoped>
.transport {
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
