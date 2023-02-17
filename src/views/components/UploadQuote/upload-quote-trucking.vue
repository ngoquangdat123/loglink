<template>
  <div class="container update-quote-sea">
    <div class="update-quote-sea__header">
      <h2 class="text-center">Download Sea Trucking Template</h2>
    </div>
    <div class="update-quote-sea__content">
      <div class="row">
        <div class="col-md-6">
          <a
              href="https://llgen.herokuapp.com/content/templates/truckingrate_template.xlsx"
              target="_blank"
              class="dropdown-item">
            <i class="fa fa-asterisk" style="margin-right: 15px;"></i>
            <span>Download Sea Quote Template</span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-9">
          <BaseInputFile
              class="mt-3"
              id="bank-statement"
              name="bank-statement"
              ref="bankStatement"
              file-browse-text="Chọn files"
              :accept-type="['.jpg', '.jpeg', '.png', '.xlsx']"
              :limit-file-size="5242880"
              required
              placeholder="Chưa có file nào được chọn"
              @change="handleFile"
          />
        </div>
        <div class="col-md-3">
          <button
              type="button"
              class="btn btn-1 btn-primary"
              :class="{'disabled': disable}"
          >
            <span>Upload</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInputFile from "@/views/components/Common/BaseInputFile";
import {uploadService} from "@/services/upload-file.service";
export default {
  name: "upload-quote-trucking",
  components: {
    BaseInputFile
  },
  data () {
    return {
      disable: true,
      formData: {
        file: []
      }
    }
  },
  methods: {
    handleFile (val) {
      this.formData.file = [val]
      this.disable = false
    },
    uploadFile () {
      try {
        const res = uploadService.uploadTruckingQuote(this.formData.file)
        console.log(res)
      } catch(e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.update-quote-sea {
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
  }
  &__content {
    .btn-primary {
      margin-top: 15px;
    }
  }
}
</style>
