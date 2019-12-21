
class ConfigService {
  static namespace = 'config';
  static themeKey = `${ConfigService.namespace}.theme`;
  static localeKey = `${ConfigService.namespace}.local`;

  constructor(storage) {
    this.storage = storage;
  }

  getTheme() {
    return this.storage.getItem(ConfigService.themeKey) || 'default';
  }

  setTheme(theme) {
    this.storage.setItem(ConfigService.themeKey, theme);
  }

  getLocale() {
    return this.storage.getItem(ConfigService.localeKey) || navigator.language;
  }

  setLocale(locale) {
    this.storage.setItem(ConfigService.localeKey, locale);
  }

}

export default new ConfigService(localStorage);
