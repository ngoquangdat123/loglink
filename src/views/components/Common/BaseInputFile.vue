<template>
  <div class="base-input-file">
    <label v-if="label" class="label">{{ label }}</label>
    <div>
      <input
        :id="id"
        :ref="refName"
        :name="name"
        type="file"
        class="file-hidden"
        :accept="acceptType"
        @change="changeFile"
      >
      <div v-if="labelType === 'input'" class="input-file" :class="{'input-error': $v.uploadFileName.$error}" >
        <div v-if="!uploadFileName" class="file-placeholder">
          {{ placeholder }}
        </div>
        <div v-else class="file-placeholder">
          <span class="icon-file icon-prefix" />
          <span class="link" @click.stop.prevent="previewFile">{{
            uploadFileName
          }}</span>
          <i class="fa fa-trash" @click="resetFile" />
        </div>
        <label
          class="file-browser"
          :for="id"
        >
          <span class="icon-attach icon" />{{ fileBrowseText }}
        </label>
      </div>
      <div v-else-if="labelType === 'button'" class="input-file__button">
        <label class="file-browser" :for="id">
          <span class="icon-upload icon" />{{ fileBrowseText }}
        </label>
      </div>
    </div>
    <p v-if="errorStr" class="error">{{ errorStr }}</p>
    <p v-if="$v.uploadFileName.$error" class="error">
      <template v-if="!$v.uploadFileName.required">
        {{
          errorRequired
            ? errorRequired
            : $t("validate.upload-required", {
              0: label ? label.toLowerCase() : "",
            })
        }}
      </template>
    </p>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import Swal from "sweetalert2";
export default {
  mixins: [validationMixin],
  props: {
    acceptType: {
      type: Array,
      default: () => ['.jpg', '.jpeg', '.png']
    },
    refName: {
      type: String,
      default: 'uploadFile'
    },
    id: {
      type: String,
      default: 'uploadFile'
    },
    name: {
      type: String,
      default: 'uploadFile'
    },
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    limitFileSize: {
      type: Number,
      default: 5242880
    },
    labelType: {
      type: String,
      default: 'input'
    },
    fileBrowseText: {
      type: String,
      default: 'Đính kèm'
    },
    validationErrorMessage: {
      type: String,
      default: 'Vui lòng nhập đúng định dạng file'
    },
    errorRequired: {
      type: String,
      default: "",
    }
  },
  data () {
    return {
      uploadFileName: null,
      fileUpload: '',
      errorStr: '',
      processingUpload: false
    };
  },
  validations() {
    return {
      uploadFileName: {
        required: this.required ? required : true,
      },
    };
  },
  methods: {
    validate() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        return this.uploadFileName;
      }
    },
    resetValidate() {
      this.$v.$reset();
    },
    async changeFile () {
      await this.uploadImage();
    },
    isWrongLimitFileSize (file) {
      return file.size > this.limitFileSize;
    },
    isWrongFileFormat (file) {
      if (!file) {
        return true;
      }
      const str = file.name;
      const extension = str.substr(str.lastIndexOf('.'));
      if (!extension) {
        return true;
      }
      return !this.acceptType.includes(extension.toLowerCase());
    },
    previewFile () {
      if (!this.fileUpload) {
        return;
      }
      const w = window.open('about:blank');
      const image = new Image();
      image.src = this.getImagePath(this.fileUpload);
      setTimeout(function () {
        w.document.write(image.outerHTML);
      }, 0);
    },
    getImagePath(id) {
      return id
    },
    resetFile () {
      if (this.$refs[this.refName]) {
        this.$refs[this.refName].value = '';
      }
      this.uploadFileName = null;
      this.$emit('reset');
    },
    handleError () {
      this.$emit('error');
      this.errorStr = this.validationErrorMessage;
    },
    async handleSuccess (file, fileName) {
      this.errorStr = null
      this.uploadFileName = fileName
      this.$emit('upload:before')
      this.processingUpload = true
      const formData = new FormData();
      formData.append('file', file);
      try {
        this.fileUpload = formData
        this.$emit('change', this.fileUpload)
        this.$emit('upload:success')
        this.processingUpload = false
      } catch (e) {
        Swal.fire({
          title: 'Upload file không thành công',
          text: ``,
          icon: 'error',
          showCloseButton: true,
          showCancelButton: true,
          confirmButtonText: 'OK',
          customClass: {
            title: 'delete'
          }
        })
        this.fileUpload = null
        this.$emit('upload:error')
        this.processingUpload = false
        this.handleError()
        this.resetFile()
      }

    },
    uploadImage () {
      this.processingUpload = true;
      const file = this.$refs[this.refName].files[0];
      if (!file) {
        this.processingUpload = false;
        return;
      }
      if (this.isWrongLimitFileSize(file) || this.isWrongFileFormat(file)) {
        this.handleError();
        this.resetFile();
        this.processingUpload = false;
        return;
      }
      try {
        this.processingUpload = true;
        this.handleSuccess(file, file.name)
      } catch {
        this.processingUpload = false;
        console.log('uploadImage error');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$base-input-file: 'base-input-file';

.#{$base-input-file} {
  .file-hidden {
    display: none;
  }
  .label {
    font-size: 12px;
    line-height: 16px;
    color: #43464e;
    margin-bottom: 8px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  .input-file {
    background: #F7F7F7;
    border-radius: 8px;
    border: 1px solid #d9e0ec;
    display: flex;
    align-items: center;
    padding: 0 12px;
    &.input-error {
      border: 1px solid #ff5631 !important;
    }

    .file-placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #898B91;
      padding: 8px 12px 8px 0;
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      .link {
        color: #3874ef;
        text-decoration: underline;
        cursor: pointer;
        width: 370px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        @media only screen and (max-width: 768px) {
          width: 180px;
        }
      }
      .icon {
        margin-left: 8px;
        &:hover {
          transform: scale(1.4);
          cursor: pointer;
        }
      }
      .icon-prefix {
        margin-right: 4px;
      }
    }
    .file-browser {
      background: #F5F7FA;
      border: 1px solid rgba(0, 123, 255, 0.4);
      display: block;
      margin-bottom: unset;
      height: 100%;
      cursor: pointer;
      padding: 4px 12px;
      color: #007BFF;
      border-radius: 4px;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      .icon {
        margin-right: 4px;
      }
      &:hover {
        background-color: #f6f8fe;
      }
      &.mobile {
        &:hover {
          background-color: white;
        }
      }
    }
  }
  .input-file__button {
    padding-top: 26px;
    padding-bottom: 26px;
    border: 1px dashed #8e99ac;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    .file-browser {
      width: 108px;
      height: 36px;
      background: #f7af24;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      cursor: pointer;
      .icon {
        margin-right: 8px;
      }
      &:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      }
    }
  }
  .error {
    margin-top: 10px;
    color: #de5656;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
  }
}

</style>
