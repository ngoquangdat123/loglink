<template>
  <div class="form-group base-datepicker" :class="{'has-error': $v.value.$error}">
    <label v-if="label">{{ label }}</label>
    <DatePicker
      :value="value"
      :input-class="[inputClass, 'date-input']"
      :format="dateFormat"
      :language="language"
      :required="required"
      calendar-button
      calendar-button-icon="fa fa-calendar"
      @selected="selectedDate"
    />
    <p v-if="$v.value.$error" class="error">
      <template v-if="!$v.value.required">
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
import { vi, en } from 'vuejs-datepicker/dist/locale'
import moment from 'moment'
import { required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
export default {
  mixins: [validationMixin],
  props: {
    value: {
      type: [Date, String],
      default: ''
    },
    inputClass: {
      type: String,
      default: 'input input--type-3'
    },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      disabledDates: {},
      DATE_FORMAT_PICKET: 'YYYY, MM, DD',
      SHORT_DATE_FORMAT: 'DD/MM/YYYY'
    }
  },
  computed: {
    language () {
      return this.$i18n.locale === 'vi' ? vi : en
    },
    dateFormat () {
      return this.$i18n.locale !== 'vi' ? 'MMMM dsu, yyyy' : 'dd/MM/yyyy'
    }
  },
  methods: {

    validate () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        return this.value
      }
    },
    resetValidate () {
      this.$v.$reset()
    },
    disabledDate (e, dir) {
      this.disabledDates = {}
      this.disabledDates[dir] = new Date(moment(e).format(this.DATE_FORMAT_PICKET))
    },
    selectedDate (val) {
      this.$emit('input', val)
    },
    formatDate (value) {
      return this.currentLanguage !== 'vi' ? moment(value).format('MMMM Do, YYYY') : moment(value).format('DD/MM/YYYY')
    }
  },
  validations () {
    return {
      value: {
        required: this.required ? required : true
      }
    }
  }
}
</script>

<style lang="scss" scoped >
$base-datepicker : 'base-datepicker';
$vdp-datepicker : 'vdp-datepicker';

.#{$base-datepicker} {
  position : relative;
  &.has-error {
    /deep/.vdp-datepicker .date-input {
      border: 1px solid #ff5631 !important;
    }
  }
  label {
    font-size: 12px;
    line-height: 16px;
    color: #43464e;
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
  }
  /deep/ .#{$vdp-datepicker} {
    input {
      border: none;
    }
    .date-input {
      font-style    : normal;
      font-weight   : 500;
      font-size: 18px;
      line-height: 26px;
      background: #F7F7F7;
      border-radius: 8px;
      color: #141822;
      padding: 8px 12px;
      height        : 40px;
      width         : 100%;
      &:focus {
        outline      : 0;
        border-color : #595239;
      }
      &::placeholder {
        color : transparent;
      }
      cursor        : pointer;
    }
    .#{$vdp-datepicker}__calendar {
      background: #F7F7F7;
      border-radius : 8px;
      color: #141822;
      font-weight   : 700;
      header {
        .day__month_btn {
          position : relative;
        }
        .prev,
        .up,
        .next {
          &:hover {
            background : transparent;
          }
        }
        .prev {
          &:after {
            border-right : 10px solid #141822;
          }
          &.disabled {
            &:after {
              border-right : 10px solid #8c8c8c;
            }
          }
        }
        .next {
          &:after {
            border-left : 10px solid #141822;
          }
          &.disabled {
            &:after {
              border-left : 10px solid #8c8c8c;
            }
          }
        }
      }
      .cell {
        &.selected {
          background: #007BFF;
        }
        &.day {
          border-radius : 50%;
        }
        &.disabled {
          color  : #717375;
          cursor : default;
        }
        &:hover,
        &:focus {
          &.day,
          &.month,
          &.year {
            background: #007BFF;;
          }
        }
        &.disabled, &.blank {
          &:hover,
          &:focus {
            &.day,
            &.month,
            &.year {
              background : transparent;
              border     : none;
            }
          }
        }
      }
    }
    .#{$vdp-datepicker}__calendar-button {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}

</style>
