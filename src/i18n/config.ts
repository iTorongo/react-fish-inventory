import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { enCommon } from "./en/common.ts";

const en = {
  ...enCommon,
};

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en,
  },
  defaultNS: "common",
  fallbackLng: "en",
});

export default i18next;
