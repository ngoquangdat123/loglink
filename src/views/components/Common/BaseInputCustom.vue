<template>
  <div
    class="form-group base-input-custom"
    :class="[className, { 'base-input-custom--password': type === 'password' }]"
  >
    <div
      v-if="inputType !== 'textarea'"
      class="input-group-alternative base-input-custom__wrap"
      :class="{
        focused: isFocus || currentValue,
        'input-error': $v.currentValue.$error,
        'focused-pointer': isFocus,
      }"
    >
      <label>{{ label }}</label>
      <MaskedInput
        ref="mark"
        v-model="currentValue"
        :mask="getMarkNumber()"
        :type="inputType"
        :name="name"
        :guide="false"
        :maxlength="limitInput"
        :disabled="disabled"
        :placeholder="formatPlaceholder"
        :inputmode="inputmode"
        autocomplete="new-password"
        :class="{'custom-password': isPin && !isShowPassword}"
        @blur="onBlur()"
        @focus="onFocus()"
      />
      <i
        v-if="type === 'password'"
        :class="[isShowPassword ? 'fa fa-eye' : 'fa fa-eye-slash', 'icon eye']"
        @click="togglePassword()"
      />
      <i v-if="searchable" class="icon search fa fa-search" @click="search" />
      <!--      <span v-if="type === 'text' && disabled" class="icon">-->
      <!--        <image-->
      <!--          src="/assets/images/components/common/icon-lock.svg"-->
      <!--          alt="coin"-->
      <!--        />-->
      <!--      </span>-->
      <span v-if="$v.currentValue.$error" />
      <slot v-if="$v.currentValue.$error" name="error" />
      <slot />
    </div>
    <div
      v-else
      class="input-group-alternative base-input-custom__wrap base-input-custom__wrap--reverse"
      :class="{
        focused: isFocus || currentValue,
        'input-error': $v.currentValue.$error,
      }"
    >
      <label>{{ label }}</label>
      <textarea
        v-model.trim="currentValue"
        :name="name"
        v-bind="$attrs"
        :placeholder="formatPlaceholder"
        :maxlength="maxLength"
        @blur="onBlur()"
        @focus="onFocus()"
      />
    </div>
    <p v-if="$v.currentValue.$error" class="error" :class="classError">
      <template v-if="!$v.currentValue.required">
        {{ formatErrorRequired }}
      </template>
      <template v-else-if="!$v.currentValue.minLength">
        {{ formatErrorMinLength }}
      </template>
      <template v-else-if="!$v.currentValue.maxLength">
        {{ formatErrorMaxLength }}
      </template>
      <template v-else-if="!$v.currentValue.minValue">
        {{ formatErrorMinValue }}
      </template>
      <template v-else-if="!$v.currentValue.maxValue">
        {{ formatErrorMaxValue }}
      </template>
      <template v-else-if="!$v.currentValue.email">
        {{ formatErrorEmail }}
      </template>
      <template v-else-if="!$v.currentValue.sameAs">
        {{ formatErrorSameAs }}
      </template>
      <template v-else-if="!$v.currentValue.notSameAs">
        {{ formatErrorNotSameAs }}
      </template>
      <template
        v-else-if="
          !$v.currentValue.specialCharacter ||
            !$v.currentValue.specialEmailCharacter
        "
      >
        {{ formatErrorSpecicalCharacter }}
      </template>
      <template v-else-if="!$v.currentValue.notZeroFirst">
        {{ formatErrorNotZeroFirst }}
      </template>
      <template v-else-if="!$v.currentValue.fullNameCharacter">
        {{ formatErrorFullNameCharacter }}
      </template>
      <template v-else-if="!$v.currentValue.usernameValidate">
        {{ formatErrorUsernameCharacter }}
      </template>
      <template v-else-if="!$v.currentValue.normalizeCharacter">
        {{ formatErrorNormalizeCharacter }}
      </template>
      <template v-else-if="!$v.currentValue.password">
        {{
          formatErrorPassword
        }}
      </template>
      <template v-else-if="!$v.currentValue.alphaNumericCharacter">
        {{
          formatErrorAlphaNumericCharacter
        }}
      </template>
    </p>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import {
  required,
  maxLength,
  minLength,
  helpers,
  email,
  sameAs,
  not
} from 'vuelidate/lib/validators'
import MaskedInput from 'vue-text-mask'

const specialCharacter = helpers.regex('specialCharacter', /^[a-zA-Z0-9_]*$/)
const specialEmailCharacter = helpers.regex(
  'specialEmailCharacter',
  /^[a-zA-Z0-9@._]*$/
)
const notZeroFirst = helpers.regex('notZeroFirst', /^[0][0-9 _]*$/)
const fullNameCharacter = helpers.regex('fullNameCharacter', /^[A-Z ]*$/)
const normalizeCharacter = helpers.regex(
  'validSpaceCharacter',
  /^[a-zA-Z0-9]*$/
)
const alphaNumericCharacter = helpers.regex(
  'alphaNumericCharacter',
  /^[a-zA-Z0-9]*$/
)
const usernameCharacter = helpers.regex('usernameCharacter', /^[a-zA-Z0-9]*$/)
export default {
  components: {
    MaskedInput
  },
  mixins: [validationMixin],
  model: {
    prop: 'inputValue',
    event: 'input'
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    inputmode: {
      type: String,
      default: 'text'
    },
    thousandsSeparatorSymbol: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    markCustom: {
      type: [Array, Object],
      default: () => {}
    },
    label: {
      type: String,
      default: ''
    },
    inputValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    blurValidate: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: undefined
    },
    minLength: {
      type: Number,
      default: undefined
    },
    maxValue: {
      type: Number,
      default: undefined
    },
    minValue: {
      type: Number,
      default: undefined
    },
    limitInput: {
      type: Number,
      default: undefined
    },
    specialCharacter: {
      type: Boolean,
      default: false
    },
    specialEmailCharacter: {
      type: Boolean,
      default: false
    },
    notZeroFirst: {
      type: Boolean,
      default: false
    },
    sameAs: {
      type: String,
      default: ''
    },
    notSameAs: {
      type: String,
      default: ''
    },
    classError: {
      type: String,
      default: ''
    },
    errorRequired: {
      type: String,
      default: ''
    },
    errorMinLength: {
      type: String,
      default: ''
    },
    errorEmail: {
      type: String,
      default: ''
    },
    errorSameAs: {
      type: String,
      default: ''
    },
    errorNotSameAs: {
      type: String,
      default: ''
    },
    alphaNumericCharacter: {
      type: Boolean,
      default: false
    },
    errorAlphaNumericCharacter: {
      type: Boolean,
      default: false
    },
    errorMaxLength: {
      type: String,
      default: ''
    },
    errorMinValue: {
      type: String,
      default: ''
    },
    errorMaxValue: {
      type: String,
      default: ''
    },
    errorUsernameCharacter: {
      type: String,
      default: ''
    },
    errorSpecialCharacter: {
      type: String,
      default: ''
    },
    errorNotZeroFirst: {
      type: String,
      default: ''
    },
    fullNameCharacter: {
      type: Boolean,
      default: false
    },
    errorFullNameCharacter: {
      type: String,
      default: ''
    },
    errorNormalizeCharacter: {
      type: String,
      default: ''
    },
    isUpperCase: {
      type: Boolean,
      default: false
    },
    isNormalize: {
      type: Boolean,
      default: false
    },
    allowValidatePassword: {
      type: Boolean,
      default: true
    },
    searchable: {
      type: Boolean,
      default: false
    },
    usernameValidate: {
      type: Boolean,
      default: false
    },
    isPin: {
      type: Boolean,
      default: false
    },
    isAmount: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      numberMask: createNumberMask({
        prefix: '',
        suffix: '',
        allowDecimal: true,
        decimalLimit: 7,
        integerLimit: this.isPin ? 6 : this.limitInput,
        thousandsSeparatorSymbol: this.thousandsSeparatorSymbol,
        allowLeadingZeroes: true,
        decimalSymbol: '.'
      }),
      isShowPassword: false,
      isFocus: false,
      inputType: this.type
    }
  },
  computed: {
    currentValue: {
      get () {
        return `${this.inputValue}`
      },
      set (value) {
        if (!this.disabled) {
          this.$emit('input', value)
        }
      }
    },
    formatPlaceholder () {
      return this.placeholder ? this.placeholder : ''
    },
    formatErrorRequired () {
      return this.errorRequired
        ? this.errorRequired
        : this.$t('validate.required', {
          0: this.label ? this.label.toLowerCase() : ''
        })
    },
    formatErrorMinLength () {
      return this.errorMinLength
        ? this.errorMinLength
        : this.$t('validate.minLength', { 0: this.label, 1: this.minLength })
    },
    formatErrorMaxLength () {
      return this.errorMaxLength
        ? this.errorMaxLength
        : this.$t('validate.maxLength', { 0: this.label, 1: this.maxLength })
    },
    formatErrorMinValue () {
      return this.errorMinValue
        ? this.errorMinValue
        : `${this.label} tối thiểu là ${this.minValue}`
    },
    formatErrorMaxValue () {
      return this.errorMaxValue
        ? this.errorMaxValue
        : `${this.label} tối đa là ${this.maxValue}`
    },
    formatErrorEmail () {
      return this.errorEmail
        ? this.errorEmail
        : this.$t('validate.isValid', { 0: this.label })
    },
    formatErrorSameAs () {
      return this.errorSameAs
        ? this.errorSameAs
        : this.$t('validate.isSame', {
          0: this.label ? this.label.toLowerCase() : ''
        })
    },
    formatErrorNotSameAs () {
      return this.errorNotSameAs
        ? this.errorNotSameAs
        : 'Vui lòng nhập mật khẩu không trùng với mật khẩu cũ'
    },
    formatErrorSpecicalCharacter () {
      return this.errorSpecialCharacter
        ? this.errorSpecialCharacter
        : `${this.label} không chứa các ký tự đặc biệt`
    },
    formatErrorNotZeroFirst () {
      return this.errorNotZeroFirst
        ? this.errorNotZeroFirst
        : `${this.label} phải bắt đầu với số 0`
    },
    formatErrorFullNameCharacter () {
      return this.errorFullNameCharacter
        ? this.errorFullNameCharacter
        : this.$t('validate.isSame', {
          0: this.label ? this.label.toLowerCase() : ''
        })
    },
    formatErrorUsernameCharacter () {
      return this.errorUsernameCharacter
        ? this.errorUsernameCharacter
        : this.$t('validate.username')
    },
    formatErrorNormalizeCharacter () {
      return this.errorNormalizeCharacter
        ? this.errorNormalizeCharacter
        : `${this.label} không bao gồm chữ Tiếng việt, không chứa ký tự đặc biệt và không chứa khoảng trắng.`
    },
    formatErrorAlphaNumericCharacter () {
      return this.errorAlphaNumericCharacter
        ? this.errorAlphaNumericCharacter
        : `${this.label} không bao gồm chữ Tiếng Việt, không chứa ký tự đặc biệt và không chứa khoảng trắng.`
    }
  },
  watch: {
    currentValue (value) {
      if (this.isUpperCase) {
        this.currentValue = value.toUpperCase()
      }
      if (value && value.length > this.limitInput) {
        const limitValue = value.slice(0, this.limitInput)
        const amount = this.$options.filters.formatMarkToNumber(limitValue, 1)
        // amount = this.$options.filters.formatMoney(amount);
        this.currentValue = isNaN(this.currentValue) ? limitValue : amount
      }
    },
    '$v.$error': {
      handler (value) {
        this.$emit('error', { name: this.name, error: value })
      }
    }
  },
  validations () {
    return {
      currentValue: {
        required: this.required ? required : true,
        maxLength: this.maxLength ? maxLength(this.maxLength) : true,
        minLength: this.minLength ? minLength(this.minLength) : true,
        specialCharacter: this.specialCharacter ? specialCharacter : true,
        specialEmailCharacter: this.specialEmailCharacter
          ? specialEmailCharacter
          : true,
        fullNameCharacter: this.fullNameCharacter ? fullNameCharacter : true,
        usernameCharacter: this.usernameValidate ? usernameCharacter : true,
        minValue: (value) => {
          const amount = this.$options.filters.formatMarkToNumber(value)
          return this.minValue
            ? parseFloat(amount) >= parseFloat(this.minValue)
            : true
        },
        maxValue: (value) => {
          const amount = value
          return this.maxValue
            ? parseFloat(amount) <= parseFloat(this.maxValue)
            : true
        },
        email: this.type === 'email' ? email : true,
        sameAs: this.sameAs ? sameAs(() => this.sameAs) : true,
        notSameAs: this.notSameAs ? not(sameAs(() => this.notSameAs)) : true,
        notZeroFirst: this.notZeroFirst ? notZeroFirst : true,
        normalizeCharacter: this.isNormalize ? normalizeCharacter : true,
        alphaNumericCharacter: this.alphaNumericCharacter
          ? alphaNumericCharacter
          : true
      }
    }
  },
  methods: {
    validate () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        return this.currentValue
      }
    },
    resetValidate () {
      this.$v.$reset()
    },
    onBlur () {
      this.isFocus = false
      if (this.blurValidate) {
        this.$v.$touch()
      }
      if (this.currentValue) {
        if (this.maxValue !== undefined) {
          const amount = this.$options.filters.formatMarkToNumber(
            this.currentValue
          )
          if (amount > this.maxValue) {
            this.currentValue = this.maxValue
            return
          }
        }
        if (this.minValue !== undefined) {
          const amount = this.$options.filters.formatMarkToNumber(
            this.currentValue
          )
          if (amount < this.minValue) {
            this.currentValue = this.minValue
          }
        }
      }
    },
    onFocus () {
      this.isFocus = true
    },
    togglePassword () {
      this.isShowPassword = !this.isShowPassword
      this.inputType = this.isShowPassword ? 'text' : 'password'
    },
    search () {
      this.$emit('search', this.currentValue)
    },
    getMarkNumber () {
      if (this.markCustom) {
        return this.markCustom
      }
      if (
        this.inputType === 'tel' ||
        this.inputType === 'number' ||
        (this.inputType === 'text' && this.isAmount) ||
        this.isPin
      ) {
        return this.numberMask
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
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

.mobile {
  .#{$base-input-custom} {
    margin-bottom: px2vw(15px);
    &::v-deep {
      .deposit-icon-verify {
        font-size: px2vw(14px);
        right: px2vw(50px);
      }
    }
    &__wrap {
      &.label {
        color: #ffffff;
      }
      &.input-error {
        input {
          padding-right: px2vw(45px);
        }
      }
      .icon {
        width: 20px;
        right: px2vw(20px);
        font-size: px2vw(20px);
      }
    }
    &__show-error {
      right: px2vw(20px);
      width: px2vw(14px);
      height: px2vw(14px);
    }
    input {
      height: px2vw(56px);
      padding: px2vw(7px) px2vw(14px);
      font-size: px2vw(16px);
      line-height: px2vw(20px);
    }
    label {
      font-size: px2vw(14px);
      transform: translate3d(px2vw(20px), px2vw(-15px), 0);
    }
    &--password {
      input {
        padding-right: px2vw(35px) !important;
      }
    }
    &.required {
      input {
        &::placeholder {
          &:after {
            padding-left: px2vw(5px);
          }
        }
      }
      label {
        &:after {
          padding-left: px2vw(5px);
        }
      }
    }

    &.card-number {
      .value-increase,
      .value-decrease {
        width: 14px;
        height: 14px;
        padding: 2px;
        font-size: px2vw(14px);
        line-height: px2vw(20px);
        /deep/span {
          font-size: px2vw(20px);
          margin-bottom: px2vw(6px);
        }
      }

      .value-decrease {
        right: px2vw(10px);
        /deep/span {
          font-size: px2vw(20px);
          margin-bottom: px2vw(8px);
        }
      }
    }
  }
}
/deep/ textarea {
  outline: none !important;
}
</style>
