import { createContext } from "react";

import { i18nReducer } from "store/i18nReducer/i18nReducer";
import { themeReducer } from "store/themeReducer/themeReducer";
import { todoReducer } from "store/todoReducer/todoReducer";

import { combineReducer } from "store/combineReducer";

const reducers = combineReducer({
  theme: themeReducer,
  todo: todoReducer,
  i18n: i18nReducer
});

const ReducerContext = createContext();

export { reducers, ReducerContext };
