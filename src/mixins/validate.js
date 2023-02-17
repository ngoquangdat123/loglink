export default {
  data () {
    return {
      validateInputs: []
    }
  },
  computed: {
    inputsValid () {
      return this.validateInputs.every(item => !item.error)
    }
  },
  methods: {
    $_validateMixin_refs (refs) {
      // validate all input fields
      const data = refs.map((item) => {
        if (!this.$refs[item]) {
          return true
        } else {
          const data = this.$refs[item].validate()
          return data !== undefined
        }
      })
      return data.every(item => !!item)
    },
    $_validateMixin_reset (refs) {
      const data = refs.map((item) => {
        if (!this.$refs[item]) {
          return true
        } else {
          const data = this.$refs[item].resetValidate()
          return data !== undefined
        }
      })
      return data.every(item => !!item)
    },
    $_validateMixin_error (input) {
      const target = this.validateInputs.find(item => item.name === input.name)
      if (target) {
        target.error = input.error
      } else {
        this.validateInputs.push(input)
      }
    }
  }
}
