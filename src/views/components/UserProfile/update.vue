<template>
  <div class="container update-user">
    <div class="update-user__header">
      <h3>CẬP NHẬT USER PROFILE {{ formData.id }}</h3>
    </div>
    <div class="update-user__content">
      <div class="row">
        <div class="col-md-12">
          <BaseInputCustom
              ref="id"
              v-model="formData.id"
              class-name="theme-light"
              name="id"
              disabled
              label="ID"
              type="number"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <BaseInputCustom
              ref="cellPhone"
              v-model="formData.cellPhone"
              class-name="theme-light"
              name="cellPhone"
              required
              label="Cell Phone"
              type="text"
              error-required="Trường Cell Phone không được để trống!"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <BaseInputCustom
              ref="companyName"
              v-model="formData.companyName"
              class-name="theme-light"
              name="companyName"
              required
              label="Company Name"
              type="text"
              error-required="Trường Company Name không được để trống!"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <BaseInputCustom
              ref="contactAddress"
              v-model="formData.contactAddress"
              class-name="theme-light"
              name="contactAddress"
              required
              label="Contact Address"
              type="text"
              error-required="Trường Contact Address không được để trống!"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <BaseInputCustom
              ref="companyLogoUrl"
              v-model="formData.companyLogoUrl"
              class-name="theme-light"
              name="companyLogoUrl"
              required
              label="Company Logo Url"
              type="text"
              error-required="Trường Destination không được để trống!"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <BaseInputCustom
              ref="coin"
              v-model="formData.coin"
              class-name="theme-light"
              name="coin"
              label="Coin"
              type="number"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <BaseSelect
              ref="user"
              :input-value="formData.userId"
              name="user"
              label="User"
              :items="listUser"
              value-field="id"
              text-field="login"
              :is-show-default="false"
              required
              error-required="Trường User không được để trống!"
              @change="formData.userId = $event"
          />
        </div>
      </div>
      <div class="action">
        <button type="button" class="btn btn-1 btn btn-icon btn-neutral btn-lg" @click="$router.back()">
          <span class="btn-inner--icon">
            <i class="fa fa-ban" />
          </span>
          <span class="btn-inner--text">Hủy</span>
        </button>
        <button
            type="button"
            class="btn btn-3 btn-icon btn-primary btn-lg"
            @click.prevent="updateUserProfile"
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
import BaseSelect from '../Common/BaseSelect'
import {userProfileService} from '@/services/user-profile.service'
import {userService} from '@/services/user.services'
import validateMixins from '../../../mixins/validate'
import Swal from "sweetalert2";

export default {
  components: {
    BaseInputCustom,
    BaseSelect
  },
  mixins: [validateMixins],
  data () {
    return {
      isValid: true,
      listUser: [],
      formData: {
        id: '',
        cellPhone: '',
        coin: '',
        companyLogoUrl: '',
        companyName: '',
        contactAddress: '',
        userId: ''
      }
    }
  },
  async created () {
    await this.getDetail()
    await this.getListUser()
  },
  methods: {
    async getDetail () {
      const id = this.$route.query.id
      try {
        const res = await userProfileService.detailUserProfile(id)
        this.formData.id = res.id
        this.formData.cellPhone = res.cellPhone
        this.formData.coin = res.coin
        this.formData.companyLogoUrl = res.companyLogoUrl
        this.formData.companyName = res.companyName
        this.formData.contactAddress = res.contactAddress
        this.formData.userId = res.userId
      }catch (e) {
        console.log(e)
      }
    },
    async getListUser () {
      try {
        const res = await userService.getAll()
        this.listUser = res.filter(data => data.login)
      } catch (e) {
        console.log(e)
      }
    },
    async updateUserProfile () {
      try {
        const refs = ['cellPhone', 'companyLogoUrl', 'companyName', 'contactAddress', 'user']
        const refsValid = this.$_validateMixin_refs(refs)
        if (refsValid) {
          const res = await userProfileService.updateUserProfile(this.formData)
          await Swal.fire({
            title: `Cập nhật user profile thành công với định danh là ${res.userId}`,
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
              await this.$router.push('/user-profile')
            }
          });
        }
      } catch (e) {
        await Swal.fire({
          title: `Lỗi`,
          text: e,
          icon: 'error',
          showCloseButton: true,
          showCancelButton: true,
          confirmButtonText: 'OK',
          customClass: {
            title: 'delete'
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/.section {
  padding-bottom: 12rem;
}
.update-user {
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

/deep/.input-group-alternative {
  box-shadow: none !important;
}

$base-input-custom: "base-input-custom";

.#{$base-input-custom} {
  position: relative;
  margin-bottom: 20px;
  &::v-deep {
    .deposit-icon-verify {
      position: absolute;
      top: 52%;
      font-size: 14px;
      transform: translateY(-50%);
      right: 50px;
    }
  }
  &__wrap {
    display: flex;
    flex-flow: column;
    position: relative;
    &.input-error {
      input {
        padding-right: 45px;
        border: 1px solid #ff5631;
      }
    }
    .icon {
      position: absolute;
      top: 65%;
      transform: translateY(-50%);
      right: 20px;
      font-size: 20px;
      transition: all 0.2s;
      cursor: pointer;
      width: 20px;
      height: 20px;
      &.eye {
        color: #fffafa;
      }
      &.search {
        color: #898b91;
        top: 60%;
        transform: translateY(-50%);
        right: 8px;
        width: 24px;
        height: 24px;
      }
    }
    &--reverse {
      flex-flow: column;
      label {
        transform: unset;
      }
    }
  }
  &__show-error {
    position: absolute;
    top: 50%;
    right: 20px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJBSURBVHgBvVZdThtBDLZnE8RL1eQE3UTwnHICKBdoBATx1pYLVOoBaHOBVj1B27cogZJeoMAF+HkGsXuDRDwumjX2ZrNswk/GIfBJo8xkxuux/dkeBAcEW1sr1tq6AVgGRJ//KqVbfSQ6tQBn5HndxVbrcNK38LHNi0bjo0H8ylMf3BDwB5uVdvsPaBSyRT5Zu8/WvIXpEGAUrVa63XB8w9w5ubn5geL45AnKBBWamzu+WF+vj2+MWCgHjOftw+xArOBT3sWZheJGVvZr0hdsHL+rttsowxqzOuE4EsCPoF737yhkNx7ALfseRMHzXoMOZSoW/44oFDaCIxPZwvJwjtY6yQgfhBuZwpT6zwlxbaLDnHNSg3ue8WXRz80nhiAH/3xjY8UYriAwPTTx5Pvhe8O0rcELgUO3bLQJbojeZAsijUsFvpBGK5RBGUNBySgFgNlWhiegwKMPGisRa2neiktrvAYF+gUWCpVxlDh8TpWr4i+907CLjjRCfL5Z7XSWZMhcIyuN2sREXY3QVRR9G85NFP10l2RfEv0zi7u7h7wIXaUwT5r5eQ1LQ9GVsJStdHbNq2Lxu7QbHiWW23EUk77YTC88wGWjccwkWILnQcD9syqTLA/R89b4pwezR0/eN8NFprDSaoXsoi+QEHFmoNja7fxjaqTSLHQ6v/nArCztsQHbC3t7I1nw8DMxjv/DoE+qSkkCohO8vl6775no8hDeUSie7iE8jqRTc/NMeuegnA1zsS+lUaqVFJA0px/FDbn81xpfXEHfAAAAAElFTkSuQmCC");
    background-repeat: no-repeat;
    width: 14px;
    height: 14px;
    background-size: contain;
    transform: translateY(-50%);
  }
  input {
    height: 40px;
    background: #20242d;
    border-radius: 8px;
    border: none;
    color: #fffafa;
    padding: 8px 12px;
    width: 100%;
    font-size: 18px;
    line-height: 26px;
    &:focus {
      outline: 0;
    }
    &::placeholder {
      //color: transparent;
      font-size: 16px;
      line-height: 26px;
    }
  }
  input[type="password"]:not(:placeholder-shown) {
    letter-spacing: 0;
  }
  label {
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    margin-bottom: 8px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  .error {
    margin-top: 5px;
    color: #ea290e;
    display: inline-block;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    margin-bottom: 0;
    &--inline {
      display: inline;
      margin-top: 0;
      position: absolute;
      right: 10px;
      top: 50%;
      color: #ffffff;
      transform: translateY(-50%);
      line-height: 1;
      background: #ff4069;
      padding: 3px;
      border-radius: 2px;
      font-weight: 700;
      z-index: 9;
      margin-right: 10px;
    }
    &--outline {
      font-size: 12px;
      display: block;
      margin-top: 5px;
      color: #bb3817;
      font-style: italic;
    }
  }
  &.theme-light {
    label {
      color: #43464e;
    }
    input {
      background: #f7f7f7;
      color: #141822;
    }
    .base-input-custom__wrap > .eye {
      color: #898b91;
    }
  }
  .mobile {
    .error {
      margin-top: px2vw(5px);
      font-size: px2vw(12px);
      line-height: px2vw(20px);
      &--inline {
        right: px2vw(10px);
        padding: px2vw(3px);
        margin-right: px2vw(10px);
      }
      &--outline {
        font-size: px2vw(12px);
        margin-top: px2vw(5px);
      }
    }
  }
  .error {
    @media (max-width: 1024px) {
      font-size: px2vw(12px);
      line-height: px2vw(20px);
    }
    &::first-letter {
      text-transform: uppercase;
    }
  }
  &--password {
    input {
      padding-right: 2.2rem !important;
    }
  }
  &.required {
    input {
      &::placeholder {
        &:after {
          //content: '*';
          color: #de5656;
          padding-left: 5px;
        }
      }
    }
    label {
      &:after {
        color: #de5656;
        padding-left: 5px;
      }
    }
  }

  &.card-number {
    input {
      text-align: center;
      padding-top: 0;
    }

    .value-increase,
    .value-decrease {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      padding: 2px;
      color: #000;
      //background-color: #969EBB;
      text-align: center;
      border-radius: 3px;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      cursor: pointer;
      font-size: 14px;
      /deep/span {
        font-size: 20px;
        margin-bottom: 6px;
      }
      &.disable {
        //background: #969EBB;
        opacity: 0.6;
      }
    }

    .value-decrease {
      left: auto;
      right: 10px;
      /deep/span {
        font-size: 20px;
        margin-bottom: 8px;
      }
    }
  }
}

.form-search-guide {
  .#{$base-input-custom} {
    margin-bottom: 0;
  }

  input {
    height: 44px;
    width: 100%;
    background: #1f2637;
    mix-blend-mode: normal;
    border: 1px solid transparent;
    font-size: 16px;
    color: #727b9d;
    padding: 4px 77px 4px 25px;
  }

  .#{$base-input-custom} {
    input::placeholder {
      opacity: 0;
    }
    label {
      font-size: 16px;
      color: #727b9d;
      transform: translate3d(20px, -10px, 0) skew(16deg, 0deg);
    }
    &__wrap {
      &.focused {
        input {
          padding-top: 7px;
        }

        label {
          font-size: 12px;
          transform: translate3d(20px, -28px, 0) skew(16deg, 0deg);
        }
      }
    }
  }
}
</style>>
