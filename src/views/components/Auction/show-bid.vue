<template>
  <div class="container show-bid">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"><span>ID</span></th>
          <th scope="col"><span>Bidder</span></th>
          <th scope="col"><span>Date Of Bid</span></th>
          <th scope="col"><span>Lump Sum</span></th>
          <th scope="col"><span>Max Transit Time</span></th>
          <th scope="col"><span>Tranship</span></th>
          <th scope="col"><span>Transit Port</span></th>
          <th scope="col"><span>Dem Det</span></th>
          <th scope="col"><span>Credit</span></th>
          <th scope="col"><span>Thao tác</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listBid" :key="index">
          <td class="text-center">{{ item.id }}</td>
          <td>{{ item.bidderLogin }}</td>
          <td>{{ formatTime(item.dateOfBid) }}</td>
          <td>{{ item.lumpSum }}</td>
          <td>{{ item.maxTransitTime }}</td>
          <td>{{ item.tranship }}</td>
          <td>{{ item.transitPort }}</td>
          <td>{{ item.demDet }}</td>
          <td>{{ item.credit }}</td>
          <td class="td-actions text-right">
            <button type="button" class="btn mb-3 btn-block btn-default">
              Chọn đối tác này
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BaseInputCustom from '../Common/BaseInputCustom'
import BaseDatePicker from '../Common/BaseDatePicker'
import {auctionService} from '@/services/auction.service'
import validateMixins from '../../../mixins/validate'
import globalMixins from '../../../mixins/global'
import moment from "moment";

export default {
  components: {
    BaseInputCustom,
    BaseDatePicker
  },
  mixins: [validateMixins, globalMixins],
  data () {
    return {
      listBid: [],
      formData: {
        page: 0,
        size: 20,
        'bidForId.equals':'',
        sort: 'lumpSum,asc'
      }
    }
  },
  async created () {
    this.formData['bidForId.equals'] = Number(this.$route.query.id) || ''
    await this.getBid()
  },
  methods: {
    async getBid () {
      try {
        const res = await auctionService.getBid(this.serialize(this.formData))
        if (res && res.length) {
          this.listBid = res
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

<style scoped>

</style>
