<template>
  <div class="container-sea">
    <div class="row">
      <div class="col-md-4">
        <BaseSelect
          ref="packing"
          :input-value="formDataSea.packing"
          name="packing"
          label="Packing"
          :items="listPacking"
          :is-show-default="false"
          @change="formDataSea.packing = $event"
        />
      </div>
      <div class="col-md-4">
        <BaseInputCustom
          ref="weight"
          v-model="formDataSea.weight"
          class-name="theme-light"
          name="weight"
          label="Weight"
          type="text"
        />
      </div>
      <div class="col-md-4">
        <BaseInputCustom
          ref="cbm"
          v-model="formDataSea.cbm"
          class-name="theme-light"
          name="cbm"
          label="Cbm"
          type="text"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <BaseInputCustom
          ref="numberOfPackage"
          v-model="formDataSea.numberOfPackage"
          class-name="theme-light"
          name="numberOfPackage"
          label="Number Of Package"
          type="text"
        />
      </div>
      <div class="col-md-6">
        <BaseInputCustom
          ref="length"
          v-model="formDataSea.length"
          class-name="theme-light"
          name="length"
          label="Length"
          type="text"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <BaseInputCustom
          ref="width"
          v-model="formDataSea.width"
          class-name="theme-light"
          name="width"
          label="Width"
          type="text"
        />
      </div>
      <div class="col-md-6">
        <BaseInputCustom
          ref="height"
          v-model="formDataSea.height"
          class-name="theme-light"
          name="height"
          label="Height"
          type="text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseInputCustom from '../../Common/BaseInputCustom'
import BaseSelect from '../../Common/BaseSelect'
export default {
  name: 'ContainerSea',
  components: {
    BaseInputCustom,
    BaseSelect
  },
  data () {
    return {
      listPacking: [
        'PALLET',
        'CARTON'
      ],
      formDataSea: {
        packing: '',
        weight: '',
        cbm: '',
        numberOfPackage: '',
        length: '',
        width: '',
        height: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
