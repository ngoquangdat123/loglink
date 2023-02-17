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
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import { LMap, LTileLayer, LMarker, LPolyline  } from 'vue2-leaflet';
import VueAutosuggest from "vue-autosuggest";

import 'leaflet/dist/leaflet.css';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-polyline', LPolyline);

Vue.component('DatePicker', Datepicker)
Vue.config.productionTip = false
Vue.use(Argon)
Vue.use(VueI18n)
Vue.filter('formatMarkToNumber', formatMarkToNumber)
Vue.use(BootstrapVue)
Vue.use(VueAutosuggest);

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
