import React, { useEffect, useContext } from 'react';
import 'components/index.scss';

import { ReducerContext } from 'store';

import Header from 'components/header/header';
import TodoList from 'components/todoList/todoList';

export default () => {
  const [state] = useContext(ReducerContext);
  const themeBg = `${state.theme.darkMode ? 'dark' : 'light'}`;

  useEffect(() => {
    document.getElementById('body').className = themeBg;
  }, [themeBg]);

  return (
    <div className={`App ${themeBg}`}>
      <Header />
      <TodoList />
    </div>
  );
};
