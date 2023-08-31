import { createI18n } from 'vue-i18n'
import en from '../locales/en.json' 
import hr from '../locales/hr.json' 

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'hr',
    defaultLocale: 'hr',
    messages: {
        en,
        hr
    }
  })

  vueApp.use(i18n)
})