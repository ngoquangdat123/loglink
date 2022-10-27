<template>
  <div class="container transport">
    <div class="transport__header">
      <h3>Transports</h3>
      <button
        type="button"
        class="btn btn-3 btn-icon btn-primary"
        @click="$router.push('/transport-route/new')"
      >
        <span class="btn-inner--icon"><i class="ni ni-fat-add" /></span><span class="btn-inner--text">Thêm mới</span>
      </button>
    </div>
    <div class="transport__content">
      <table class="table">
        <thead>
        <tr>
          <th scope="col" @click="sortDataById('id')">
            <span>ID</span>
            <i class="fa fa-sort" aria-hidden="true"></i>
          </th>
          <th scope="col" @click="sortData('name')">
            <span>Name</span>
            <i class="fa fa-sort" aria-hidden="true"></i>
          </th>
          <th scope="col" @click="sortData('englishTranslation')">
            <span>English Translation</span>
            <i class="fa fa-sort" aria-hidden="true"></i>
          </th>
          <th scope="col">
            Thao tác
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in transports" :key="index">
          <td class="text-center">{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.englishTranslation}}</td>
          <td class="td-actions text-right">
            <div class="d-flex">
              <button type="button" class="btn btn-primary" @click="viewDetail(item.id)">Xem</button>
              <button type="button" class="btn btn-warning" @click="updateItem(item.id)">Sửa</button>
              <button type="button" class="btn btn-danger" @click="deleteItem(item.id)">xóa</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { transportService } from '@/services/transport.service'
import Swal from "sweetalert2";
export default {
  components: {
  },
  data () {
    return {
      transports: [],
      sort: false,
      sortById: true,
      sortType: 'asc',
      paramSort: 'id',
      formData: {
        page: 0,
        size: 20,
        sort: ''
      }
    }
  },
  created () {
    this.getTransport()
  },
  methods: {
    async sortDataById (param) {
      this.paramSort = param
      this.sortById = !this.sortById
      if (this.sortById) {
        this.sortType = 'asc'
      } else {
        this.sortType = 'desc'
      }
      await this.getTransport()
    },
    async sortData (param) {
      this.paramSort = param
      this.sort = !this.sort
      if (this.sort) {
        this.sortType = 'asc'
      } else {
        this.sortType = 'desc'
      }
      await this.getTransport()
    },
    async getTransport () {
      try {
        this.formData.sort = this.paramSort + ',' + this.sortType
        const res = await transportService.getTransport(this.serialize(this.formData))
        if (res && res.length) {
          this.transports = res
        }
      } catch (e) {
        console.log(e)
      }
    },
    serialize(obj) {
      let str = [];
      for (let p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      return str.join("&");
    },
    viewDetail(id) {
      this.$router.push(`/transport-route/detail?id=${id}`)
    },
    updateItem(id) {
      this.$router.push(`/transport-route/edit?id=${id}`)
    },
    deleteItem (id) {
      Swal.fire({
        title: 'XÁC NHẬN HÀNH ĐỘNG XÓA',
        text: `Bạn có chắc là muốn xóa Transport Route ${id}?`,
        icon: 'error',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: 'Hủy',
        confirmButtonText: 'Xóa',
        customClass: {
          title: 'delete'
        }
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.submit(id)
        }
      });
    },
    async submit(id) {
      try {
        await transportService.deleteTransport(id)
        await Swal.fire({
          title: 'Xóa thành công',
          text: ``,
          icon: 'success',
          showCloseButton: true,
          showCancelButton: true,
          confirmButtonText: 'OK',
          customClass: {
            title: 'delete'
          }
        }).then(async (result) => {
          if (result.isConfirmed) {
            await this.getTransport()
          }
        });
      } catch (e) {
        console.log(e)
      }
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
  &__content {
    table {
      th {
        .fa-sort {
          margin-left: 5px;
        }
        &:hover {
          cursor: pointer;
          span {
            color: #5e72e4;
          }
          .fa-sort {
            &:before {
              color: #5e72e4;
            }
          }
        }
      }
    }
  }
}
</style>
