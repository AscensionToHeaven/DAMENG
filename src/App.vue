<template>
  <div id="app" :class="`theme-${$store.state.theme}`">
    <div class="header">
      <div class="header-right">
        <theme-button :data="themeList" :value="$store.state.theme" @change="handleThemeChange" />
        <radio-button :data="localeList" :value="$store.state.locale" @change="handleChangeLocale" />
      </div>
    </div>
    <img alt="DAMENG logo" src="./assets/logo.png" />
    <h2>{{logoText}}</h2>
  </div>
</template>

<script>
import RadioButton from './components/RadioButton';
import ThemeButton from './components/ThemeButton';

export default {
  name: 'app',
  data() {
    return {
      themeList: [
        {
          color: '#00a4a4',
          value: 'default',
        },
        {
          color: '#409eff',
          value: 'blue',
        },
        {
          color: '#e6a23c',
          value: 'orange',
        },
      ],
      localeList: [
        {
          text: '中文',
          value: 'zh-CN',
        },
        {
          text: 'English',
          value: 'en',
        }
      ],
    };
  },
  computed: {
    logoText() {
      return this.$locale(this.$store.state.locale, 'logoText');
    },
  },
  methods: {
    handleChangeLocale(locale) {
      this.$store.commit('setLocale', locale);
    },
    handleThemeChange(theme) {
      this.$store.commit('setTheme', theme);
    },
  },
  components: {
    RadioButton,
    ThemeButton,
  }
}
</script>

<style lang="less">
@default-color: #00a4a4;
@blue-color: #409eff;
@orange-color: #e6a23c;

#app {
  text-align: center;
  * {
    transition: color, background-color .5s;
  }
  h2 {
    margin: 0;
    font-size: 32px;
  }
  &.theme-default {
    h2 {
      color: @default-color;
    }
    .radio-button--item.radio-button--item-selected {
      background-color: @default-color;
      border-color: @default-color;
    }
  }
  &.theme-blue {
    h2 {
      color: @blue-color;
    }
    .radio-button--item.radio-button--item-selected {
      background-color: @blue-color;
      border-color: @blue-color;
    }
  }
  &.theme-orange {
    h2 {
      color: @orange-color;
    }
    .radio-button--item.radio-button--item-selected {
      background-color: @orange-color;
      border-color: @orange-color;
    }
  }
}
.header {
  height: 40px;
  margin-bottom: 20px;
  text-align: right;
  border-bottom: 1px solid #ccc;
}
.header-right {
  > div {
    margin-right: 16px;
  }
}
</style>
