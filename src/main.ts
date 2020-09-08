import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/styles/bootstrap.min.css';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import VueShowdown from 'vue-showdown';
import App from './App.vue';
import Articles from './components/Articles.vue';
import Projects from './components/Projects.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueShowdown, {
  flavor: 'github',
  options: { emoji: true },
});

const routes: RouteConfig[] = [
  { path: '/', component: Articles, name: 'Articles' },
  { path: '/projects', component: Projects, name: 'Projects' },
];

const router = new VueRouter({ routes });

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
