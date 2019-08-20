import { createContext } from "react";

import { i18nReducer } from "reducers/i18nReducer/i18nReducer";
import { themeReducer } from "reducers/themeReducer/themeReducer";
import { todoReducer } from "reducers/todoReducer/todoReducer";

import { combineReducer } from "reducers/combineReducer";

const reducers = combineReducer({
  theme: themeReducer,
  todo: todoReducer,
  i18n: i18nReducer
});

const ReducerContext = createContext();

export { reducers, ReducerContext };
