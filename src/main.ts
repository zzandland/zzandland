import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';

// Install BootstrapVue
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
