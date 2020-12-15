import Vue from 'vue'
import VueSwal from 'vue-sweetalert2';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import vSelect from 'vue-select'
// import 'vue-select/dist/vue-select.css';

// Vue.component('v-selects', vSelect)
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

Vue.use(Autocomplete)


Vue.config.productionTip = false
Vue.use(VueSwal)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
