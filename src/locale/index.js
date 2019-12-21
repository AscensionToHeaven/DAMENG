import en from "./en";
import zhCN from './zh-CN'

export const localeMap = {
  en,
  'zh-CN': zhCN,
};

export default function getLocale(locale, key) {
  if(!localeMap[locale]) {
    throw new Error(`locale [${locale}] not found`);
  }
  if(!(key in localeMap[locale])) {
    throw new Error(`locale item [${locale}.${key}] not found`);
  }
  return localeMap[locale][key];
}
