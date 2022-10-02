<template>
  <div class="container-row">
    <div v-if="method === 'Truck'" class="row">
      <div class="col-md-6">
        <BaseInputCustom
          ref="totalDistanceKm"
          v-model="formDataRow.totalDistanceKm"
          class-name="theme-light"
          name="totalDistanceKm"
          label="Total Distance Km"
          :is-pin="true"
          type="number"
        />
      </div>
    </div>
    <div class="container-option">
      <div class="row title">
        <div class="col-md-6">
          <p>CONTAINER OPTIONS:</p>
        </div>
        <div class="col-md-6">
          <button type="button" class="btn btn-1 btn-primary" @click="numberElement++">
            Add
          </button>
        </div>
      </div>
      <template v-for="(i, index) in numberElement">
        <div :key="index" class="row">
          <div class="col-md-4">
            <BaseSelect
              ref="containerType"
              :input-value="formDataRow.containerType"
              name="containerType"
              label="Container Type"
              value-field="details"
              text-field="details"
              :items="listContainerType"
              :is-show-default="false"
              @change="formDataRow.containerType = $event"
            />
          </div>
          <div v-if="method !== 'Truck'" class="col-md-4">
            <BaseInputCustom
              ref="numberOfContainer"
              v-model="formDataRow.numberOfContainer"
              class-name="theme-light"
              name="numberOfContainer"
              label="Number Of Container"
              :is-pin="true"
              type="number"
            />
          </div>
          <div class="col-md-4">
            <button
              style="margin-top: 22px;"
              type="button"
              class="btn btn-1 btn-danger"
              @click="numberElement--"
            >
              Remove
            </button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import BaseInputCustom from '../../Common/BaseInputCustom'
import BaseSelect from '../../Common/BaseSelect'
import { auctionService } from '../../../../services/auction.service'
export default {
  name: 'ContainerRow',
  components: {
    BaseInputCustom,
    BaseSelect
  },
  props: {
    method: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      numberElement: 0,
      listContainerType: [],
      formDataRow: {
        containerType: '',
        totalDistanceKm: '',
        numberOfContainer: 1
      }
    }
  },
  async created () {
    await this.getContainerType()
  },
  methods: {
    async getContainerType () {
      try {
        this.listContainerType = await auctionService.getContainerTypes()
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 25px;
  .col-md-6 {
    p {
      margin: 0;
    }
  }
}
.container-option {
  border: 1px solid rgba(0,0,0,.05);
  padding: 25px;
  margin: 15px 0;
}
</style>
