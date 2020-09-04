import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/projects', component: Projects, name: 'Projects' },
];

const router = new VueRouter({ routes });

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
