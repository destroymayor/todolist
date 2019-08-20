import ZHTW from "i18n/zh-tw.json";
import EN from "i18n/en.json";

const translations = {
  zh_tw: ZHTW,
  en: EN
};

const getTranslate = langCode => key => translations[langCode][key] || key;

const initState = {
  langCode: "zh_tw",
  translate: getTranslate("zh_tw")
};

const i18nReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, langCode: action.langCode, translate: getTranslate(action.langCode) };

    default:
      return { ...state };
  }
};

export { i18nReducer };
