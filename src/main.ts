import {
  ButtonPlugin,
  CardPlugin,
  JumbotronPlugin,
  LayoutPlugin,
  NavbarPlugin,
} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/styles/bootstrap.min.css';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from './store';

const App = () => import('./App.vue');
const Articles = () => import('./components/Articles.vue');
const ArticleComponent = () => import('./components/Article.vue');
const Projects = () => import('./components/Projects.vue');

Vue.use(VueRouter);
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(JumbotronPlugin);
Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);

const routes: RouteConfig[] = [
  { path: '/', component: Articles, name: 'Articles' },
  { path: '/projects', component: Projects, name: 'Projects' },
  {
    path: '/articles/:path',
    component: ArticleComponent,
    name: 'Article',
    props: (route) => ({ path: route.params.path }),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
