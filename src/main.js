import Vue from 'vue';
import App from './App.vue';
import store from './store';
import getLocale from './locale';


Vue.config.productionTip = false;
Vue.prototype.$locale = getLocale;


new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
