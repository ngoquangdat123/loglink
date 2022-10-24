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
                <button type="button" class="btn btn-primary">Xem</button>
                <button type="button" class="btn btn-warning">Sửa</button>
                <button type="button" class="btn btn-danger">xóa</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {auctionService} from '@/services/auction.service'
import validateMixins from '../../../mixins/validate'
import globalMixins from '../../../mixins/global'
import moment from "moment";

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
    await this.getBid()
  },
  methods: {
    async getBid () {
      try {
        const res = await auctionService.listUserProfile(this.serialize(this.formData))
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
