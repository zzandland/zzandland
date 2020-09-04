import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: '/', component: HelloWorld, name: 'Home' },
];

const router = new VueRouter({ routes });

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
