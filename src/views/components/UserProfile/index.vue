<template>
  <div class="container user-profile">
    <div class="user-profile__header">
      <h3>USER PROFILES</h3>
      <button
          type="button"
          class="btn btn-3 btn-icon btn-primary"
          @click="$router.push('/user-profile/new')"
      >
        <span class="btn-inner--icon"><i class="ni ni-fat-add" /></span>
        <span class="btn-inner--text">Thêm mới một User Profile</span>
      </button>
    </div>
    <div class="user-profile__content">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"><span>ID</span></th>
            <th scope="col"><span>Cell Phone</span></th>
            <th scope="col"><span>Company Name</span></th>
            <th scope="col"><span>Contact Address</span></th>
            <th scope="col"><span>Company Logo Url</span></th>
            <th scope="col"><span>Coin</span></th>
            <th scope="col"><span>User</span></th>
            <th scope="col"><span>Thao tác</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listUser" :key="index">
            <td class="text-center">{{ item.id }}</td>
            <td>{{ item.cellPhone }}</td>
            <td>{{ item.companyName}}</td>
            <td>{{ item.contactAddress }}</td>
            <td>{{ item.companyLogoUrl }}</td>
            <td>{{ item.coin }}</td>
            <td>{{ item.userLogin }}</td>
            <td class="td-actions text-right">
              <div class="d-flex">
                <button type="button" class="btn btn-primary" @click="viewDetail(item.id)">Xem</button>
                <button type="button" class="btn btn-warning">Sửa</button>
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
import {userProfileService} from '@/services/user-profile.service'
import validateMixins from '../../../mixins/validate'
import globalMixins from '../../../mixins/global'
import moment from "moment";
import Swal from "sweetalert2";
export default {
  mixins: [validateMixins, globalMixins],
  data () {
    return {
      listUser: [],
      formData: {
        page: 0,
        size: 20,
        sort: 'id,asc'
      }
    }
  },
  async created () {
    await this.getListUser()
  },
  methods: {
    async getListUser () {
      try {
        const res = await userProfileService.listUserProfile(this.serialize(this.formData))
        if (res && res.length) {
          this.listUser = res
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
    formatTime (value) {
      return moment(value).format('HH:mm:ss DD/MM/YYYY')
    },
    viewDetail(id) {
      this.$router.push(`/user-profile/detail?id=${id}`)
    },
    deleteItem (id) {
      Swal.fire({
        title: 'XÁC NHẬN HÀNH ĐỘNG XÓA',
        text: `Bạn có chắc là muốn xóa User ${id}?`,
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
        await userProfileService.deleteUserProfile(id)
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
            await this.getListUser()
          }
        });
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.user-profile {
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
