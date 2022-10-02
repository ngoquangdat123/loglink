<template>
  <div class="form-group base-select" :class="[className]">
    <p v-if="label" class="base-select__label" :class="[classLabel]">
      {{ label }}
    </p>
    <div
      v-click-outside="hideOption"
      class="base-select__wrap"
      :class="{
        focused: currentValue,
        'input-error': $v.currentValue.$error,
        disabled: disabled,
        show: isShowOptions,
      }"
      @click="isShowOptions = !isShowOptions"
    >
      <div class="base-select__icon">
        <i class="fa fa-caret-down arrow-down" aria-hidden="true" />
      </div>
      <ul v-if="isShowOptions" class="base-select__options">
        <li
          v-if="isShowDefault"
          :class="{ active: !currentValue }"
          class="base-select__item"
          @click.stop="resetOption"
        >
          <a href="javascript:void(0)" class="base-select__link">{{
            placeholder
          }}</a>
        </li>
        <li
          v-for="(item, index) in items"
          :key="getKeyLoop(item, index)"
          :class="{ active: currentValue === getValue(item) }"
          class="base-select__item"
          @click.stop="chooseOption(item)"
        >
          <a href="javascript:void(0)" class="base-select__link">
            <slot v-if="customDisplayItem" :item="item" name="item" />
            <template v-else>{{ getText(item) }}</template>
          </a>
        </li>
      </ul>
      <div class="base-select__inner">
        <div v-if="!currentValue" class="base-select__empty">
          <p>{{ placeholder }}</p>
        </div>
        <div v-else class="base-select__value">
          <slot
            v-if="customDisplayItem"
            :textShow="textShow"
            :dataSelected="dataSelected"
            name="text"
          />
          <p v-else>{{ textShow }}</p>
        </div>
      </div>
    </div>
    <p v-if="$v.currentValue.$error" class="error">
      <template v-if="!$v.currentValue.required">
        {{
          errorRequired
            ? errorRequired
            : $t("validate.required", {
              0: label ? label.toLowerCase() : "",
            })
        }}
      </template>
    </p>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  model: {
    prop: 'inputValue',
    event: 'change'
  },
  props: {
    inputValue: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    classLabel: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    textField: {
      type: String,
      default: ''
    },
    valueField: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorRequired: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    getObjectValue: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      default: 0
    },
    customDisplayItem: {
      type: Boolean,
      default: false
    },
    isShowDefault: {
      type: Boolean,
      default: true
    },
    keyLoop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dataSelected: null,
      isShowOptions: false
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.inputValue
      },
      set (value) {
        if (this.getObjectValue) {
          const selectedItem = this.items.find(
            item => item[this.valueField] === value
          )
          this.$emit('change', selectedItem)
        } else {
          this.$emit('change', value)
        }
      }
    },
    textShow () {
      if (this.textField && this.valueField) {
        const data = this.items.find(
          item => item[this.valueField] === this.currentValue
        )
        return data ? data[this.textField] : ''
      }
      return this.currentValue
    }
  },
  watch: {
    '$v.$error': {
      handler (value) {
        this.$emit('error', { name: this.name, error: value })
      }
    },
    currentValue (value) {
      this.dataSelected = this.items.find(
        item => item[this.valueField] === value
      )
    }
  },
  mounted () {
    if (this.currentValue) {
      this.dataSelected = this.items.find(
        item => item[this.valueField] === this.currentValue
      )
    }
  },
  validations () {
    return {
      currentValue: {
        required: this.required ? required : true
      }
    }
  },
  methods: {
    validate () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        return this.inputValue
      }
    },
    resetValidate () {
      this.$v.$reset()
    },
    getValue (item) {
      return this.valueField ? item[this.valueField] : item
    },
    getText (item) {
      return this.textField ? item[this.textField] : item
    },
    resetOption () {
      this.currentValue = ''
      this.isShowOptions = false
    },
    chooseOption (item) {
      this.currentValue = this.valueField ? item[this.valueField] : item
      this.dataSelected = item
      this.isShowOptions = false
    },
    hideOption () {
      this.isShowOptions = false
    },
    getKeyLoop (item, index) {
      switch (this.keyLoop) {
        case 'index':
          return index
        case '':
          return this.valueField ? item[this.valueField] : item
        default:
          return item[this.keyLoop] ? item[this.keyLoop] : index
      }
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
$base-select: "base-select";

.#{$base-select} {
  position: relative;
  &__label {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #43464e;
    margin-bottom: 8px;
  }
  &__wrap {
    display: flex;
    flex-flow: column-reverse;
    position: relative;
    background: #f7f7f7;
    border-radius: 8px;
    height: 40px;
    &.show {
      .arrow-down {
        transform: rotate(-180deg);
      }
    }
    label {
      padding: 0 0.25rem;
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
      cursor: auto;
      pointer-events: none;
      position: absolute;
      transform: translate3d(12px, -13px, 0);
      transform-origin: left top;
      transition: 240ms;
      opacity: 0;
    }
  }
  &__inner {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 11px 19px 11px 10px;
    font-size: 14px;
    line-height: 17px;
    font-weight: normal;
    color: #54718c;
    p {
      margin-bottom: 0;
    }
  }
  &__value {
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    p {
      margin-bottom: 0;
    }
  }
  &__logo {
    margin-right: 15px;
    width: 25px;
    height: 25px;
    img {
      width: 100%;
      height: 100%;
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
  &__wrap {
    &.input-error {
      border: 1px solid #ff5631 !important;
      .#{$base-select}__inner {
        padding-right: 42px;
      }
      select {
        border: 1px solid #ff5631;
      }
    }
    select {
      &:focus {
        border-color: #f7f8fa;
      }
    }
    &.focused {
      label {
        color: #838a92;
        background-color: #202023;
        z-index: 1;
        opacity: 1;
      }
    }
  }
  &__empty {
    width: 100%;
  }
  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 19px;
    font-size: 20px;
    .arrow-down {
      display: block;
      transition: all 0.2s;
    }
  }
  &__options {
    overflow: hidden;
    max-height: 385px;
    overflow-y: auto;
    transition: all 0.2s linear;
    transition-delay: 1ms;
    position: absolute;
    width: calc(100% + 2px);
    left: -1px;
    top: 110%;
    color: #000000;
    z-index: 9;
    background: #f7f7f7;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    padding: 0;
    list-style: none;
    &::-webkit-scrollbar-thumb {
      background-color: #d3d7de;
      border-radius: 10px;
    }
    &::-webkit-scrollbar {
      width: 0.3rem;
    }
  }
  &__item {
    cursor: default;
    padding: 0 10px;
    &:not(:first-child) {
      .#{$base-select}__link {
        border-top: 1px solid #0f273e24;
      }
    }
    &:hover {
      background-color: gray;
      .#{$base-select}__link {
        color: #ffffff;
        border-top: 1px solid transparent;
      }
    }
  }
  &__link {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    height: 40px;
    padding: 12px 0px;
    border-top: 1px solid transparent;
  }
}
.theme-light {
  .#{$base-select} {
    &__label {
      color: #43464e;
    }
    &__wrap {
      background: #f7f7f7;
    }
    &__inner {
      color: #43464e;
    }
    &__value {
      color: #43464e;
    }
    &__icon {
      .arrow-down {
        color: #898b91;
      }
    }
    &__link {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #101828;
      border: none;
      border-top: none !important;
      display: inline-block;
      &:hover {
        text-decoration: none !important;
      }
    }
    &__options {
      background: #ffffff;
    }
    &__item {
      position: relative;
      &.active {
        position: relative;
        &::before {
          display: block;
          content: "";
          width: 20px;
          height: 20px;
          background-image: url("/img/wallet/icon-check.svg");
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 16px;
        }
      }
      &:hover {
        background: #000000;
        color: #ffffff;
      }
    }
  }
}
</style>
