import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Argon from './plugins/argon-kit'
import './registerServiceWorker'
import store from './store/index'
// eslint-disable-next-line import/order
import VueI18n from 'vue-i18n'
// eslint-disable-next-line import/order
import Datepicker from 'vuejs-datepicker'
Vue.component('DatePicker', Datepicker)
Vue.config.productionTip = false
Vue.use(Argon)
Vue.use(VueI18n)
Vue.filter('formatMarkToNumber', formatMarkToNumber)
function formatMarkToNumber (str, multiplier = 1) {
  if (str) {
    return Number(str.replace(/,|\./g, '')) * multiplier
  }
  return 0
}
const i18n = new VueI18n({
  locale: 'vi',
  fallbackLocale: 'vi'
})
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
