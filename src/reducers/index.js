import { createContext } from "react";

import { themeReducer } from "reducers/themeReducer/themeReducer";
import { todoReducer } from "reducers/todoReducer/todoReducer";

import { combineReducer } from "reducers/combineReducer";

const reducers = combineReducer({
  theme: themeReducer,
  todo: todoReducer
});

const ReducerContext = createContext();

export { reducers, ReducerContext };
