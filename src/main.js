import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Router from './router/index';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router:Router,
  vuetify
}).$mount('#app')
