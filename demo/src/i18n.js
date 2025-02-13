import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Matrimony App",
      login: "Login",
      register: "Register",
      changeLanguage: "Change Language"
    }
  },
  te: {
    translation: {
      welcome: "మాట్రిమోనీ యాప్‌కి స్వాగతం",
      login: "ప్రవేశించండి",
      register: "నమోదు",
      changeLanguage: "భాష మార్చండి"
    }
  },
  hi: {
    translation: {
      welcome: "मैट्रिमोनी ऐप में आपका स्वागत है",
      login: "लॉगिन करें",
      register: "रजिस्टर करें",
      changeLanguage: "भाषा बदलें"
    }
  }
};

// ✅ Detect Language Correctly
const getInitialLanguage = () => {
  const savedLang = localStorage.getItem("language");
  if (savedLang) return savedLang; // ✅ If saved in localStorage, use it
  const browserLang = navigator.language.split("-")[0]; // ✅ Get browser language
  return ["en", "te", "hi"].includes(browserLang) ? browserLang : "en"; // ✅ Default to "en" if unknown
};

// ✅ Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

// ✅ Save Language Preference in LocalStorage
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
