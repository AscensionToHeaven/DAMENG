import Vue from 'vue';
import Vuex from 'vuex';
import configService from '../services/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: configService.getTheme(),
    locale: configService.getLocale(),
  },
  mutations: {
    setTheme (state, theme) {
      configService.setTheme(theme);
      state.theme = theme;
    },
    setLocale (state, locale) {
      configService.setLocale(locale);
      state.locale = locale;
    },
  },
});
