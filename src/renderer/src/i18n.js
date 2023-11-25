// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        textareaPlaceholder: 'Type here...'
      }
    },
    hi: {
      translation: {
        textareaPlaceholder: 'यहाँ टाइप करें'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
