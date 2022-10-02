<template>
  <div class="container create-auction">
    <div class="create-auction__header">
      <h3>Thêm mới hoặc cập nhật auction</h3>
    </div>
    <div class="create-auction__content">
      <div class="row">
        <div class="col-md-12">
          <BaseSelect
            ref="transportMethod"
            :input-value="formData.transportMethod"
            name="transportMethod"
            label="Transport Method"
            :items="listTransportMethod"
            value-field="transportMethod"
            text-field="transportMethod"
            :is-show-default="false"
            required
            error-required="Trường Transport Method không được để trống!"
            @change="formData.transportMethod = $event"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <BaseInputCustom
            ref="origin"
            v-model="formData.origin"
            class-name="theme-light"
            name="origin"
            required
            label="Origin"
            type="text"
            error-required="Trường Origin không được để trống!"
          />
        </div>
        <div class="col-md-6">
          <BaseInputCustom
            ref="destination"
            v-model="formData.destination"
            class-name="theme-light"
            name="destination"
            required
            label="Destination"
            type="text"
            error-required="Trường Destination không được để trống!"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <BaseDatePicker
            ref="opening"
            v-model="formData.opening"
            class-name="theme-light"
            name="opening"
            label="Opening"
            type="text"
          />
        </div>
        <div class="col-md-6">
          <BaseDatePicker
            ref="closing"
            v-model="formData.closing"
            class-name="theme-light"
            name="closing"
            label="Closing"
            type="text"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <BaseDatePicker
            ref="etd"
            v-model="formData.etd"
            class-name="theme-light"
            name="etd"
            label="Etd"
          />
        </div>
        <div class="col-md-6">
          <BaseDatePicker
            ref="eta"
            v-model="formData.eta"
            class-name="theme-light"
            name="eta"
            label="Eta"
          />
        </div>
      </div>
      <!-- ContainerSea -->
      <template v-if="formData.transportMethodId">
        <ContainerSea v-if="formData.transportMethodId === 3" />
        <ContainerRow :method="formData.transportMethod" v-else />
      </template>
      <!--      Expected Offer -->
      <div class="row">
        <div class="col-md-12">
          <BaseInputCustom
            ref="expectedOffer"
            v-model="formData.expectedOffer"
            class-name="theme-light"
            name="expectedOffer"
            label="Expected Offer"
            type="text"
          />
        </div>
      </div>
      <!--      Hs Code-->
      <div class="row">
        <div class="col-md-6">
          <BaseInputCustom
            ref="hsCode"
            v-model="formData.hsCode"
            class-name="theme-light"
            name="hsCode"
            required
            :is-pin="true"
            label="Hs Code"
            type="number"
            error-required="Trường Hs Code không được để trống!"
          />
        </div>
        <div class="col-md-6">
          <BaseInputCustom
            ref="commodityDescription"
            v-model="formData.commodityDescription"
            class-name="theme-light"
            name="commodityDescription"
            required
            label="Commodity Description"
            type="text"
            error-required="Trường Commodity Description không được để trống!"
          />
        </div>
      </div>
      <!--      Max Transit Time-->
      <div class="row">
        <div class="col-md-4">
          <BaseInputCustom
            ref="maxTransitTime"
            v-model="formData.maxTransitTime"
            class-name="theme-light"
            name="maxTransitTime"
            label="Max Transit Time"
            type="number"
            :is-pin="true"
          />
        </div>
        <div class="col-md-4">
          <BaseSelect
            ref="term"
            :input-value="formData.term"
            name="term"
            label="Term"
            :items="listTerm"
            :is-show-default="false"
            required
            error-required="Trường Term không được để trống!"
            @change="formData.term = $event"
          />
        </div>
        <div v-if="formData.transportMethodId === 4 || formData.transportMethodId === 3" class="col-md-4">
          <p
            style="
                font-size: 12px;
                line-height: 16px;
                color: #000000;
                margin-bottom: 8px;
            "
            class="base-select__label"
          >
            Tranship
          </p>
          <div class="custom-control custom-checkbox mb-3">
            <input
              id="zolwYUt"
              v-model="formData.tranship"
              type="checkbox"
              class="custom-control-input"
              :true-value="true"
              :false-value="false"
              @change="changeValueTranShip"
            ><label
              for="zolwYUt"
              class="custom-control-label"
            >
              Tranship
            </label>
          </div>
        </div>
        <div v-else class="col-md-4" />
      </div>
      <!--      Preferred Shipping Line-->
      <div class="row">
        <div class="col-md-6">
          <BaseInputCustom
            ref="preferredShippingLine"
            v-model="formData.preferredShippingLine"
            class-name="theme-light"
            name="preferredShippingLine"
            label="Preferred Shipping Line"
            type="text"
          />
        </div>
        <div class="col-md-6">
          <BaseInputCustom
            ref="avoidShippingLine"
            v-model="formData.avoidShippingLine"
            class-name="theme-light"
            name="avoidShippingLine"
            label="Avoid Shipping Line"
            type="text"
          />
        </div>
      </div>
      <!--      Remark -->
      <div class="row">
        <div class="col-md-12">
          <BaseInputCustom
            ref="remark"
            v-model="formData.remark"
            class-name="theme-light"
            name="remark"
            label="Remark"
            type="text"
          />
        </div>
      </div>
      <div class="action">
        <button type="button" class="btn btn-1 btn btn-icon btn-neutral btn-lg">
          <span class="btn-inner--icon">
            <i class="fa fa-ban" />
          </span>
          <span class="btn-inner--text">Hủy</span>
        </button>
        <button
          type="button"
          class="btn btn-3 btn-icon btn-primary btn-lg"
          @click.prevent="addAuction"
        >
          <span class="btn-inner--icon">
            <i class="ni ni-bag-17" />
          </span>
          <span class="btn-inner--text">Lưu</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import BaseInputCustom from '../Common/BaseInputCustom'
import BaseDatePicker from '../Common/BaseDatePicker'
import BaseSelect from '../Common/BaseSelect'
import { auctionService } from '../../../services/auction.service'
import validateMixins from '../../../mixins/validate'
import ContainerSea from './create-container/container-sea'
import ContainerRow from './create-container/container-row'
export default {
  components: {
    BaseInputCustom,
    BaseDatePicker,
    BaseSelect,
    ContainerSea,
    ContainerRow
  },
  mixins: [validateMixins],
  data () {
    return {
      numberOfContainer: 0,
      isValid: true,
      listTransportMethod: [],
      listTerm: [
        'COLLECT',
        'PREPAID'
      ],
      formData: {
        transportMethod: '',
        avoidShippingLine: '',
        closed: false,
        closing: new Date(),
        commodityDescription: '',
        eta: new Date(),
        etd: new Date(),
        expectedOffer: '',
        hsCode: '',
        maxTransitTime: '',
        numberOfContainer: 1,
        opening: new Date(),
        preferredShippingLine: '',
        ref: 'BA000000',
        remark: '',
        requestDate: new Date(),
        term: '',
        tranship: false,
        transportMethodId: '',
        winnerIdId: '',
        destination: '',
        origin: ''
      }
    }
  },
  watch: {
    'formData.transportMethod' (value) {
      this.formData.transportMethodId = this.listTransportMethod.filter(data => data.transportMethod === value).shift().id
    }
  },
  created () {
    this.getTransportMethod()
  },
  methods: {
    changeValueTranShip (event) {
      console.log(this.formData.tranship)
    },
    async getTransportMethod () {
      try {
        this.listTransportMethod = await auctionService.getTransportMethod()
      } catch (e) {
        console.log(e)
      }
    },
    async addAuction () {
      try {
        const refs = ['transportMethod', 'origin', 'destination', 'term', 'commodityDescription', 'hsCode']
        const refsValid = this.$_validateMixin_refs(refs)
        if (refsValid) {
          const res = await auctionService.addAuction(this.formData)
          console.log(res)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.create-auction {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    button {
      &:first-child {
        margin-right: 15px;
      }
    }
  }
}
</style>>
