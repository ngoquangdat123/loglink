import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(["account"]),
        currentUser () {
            return this.$store.state.account.currentUser || {}
        }
    }
}
