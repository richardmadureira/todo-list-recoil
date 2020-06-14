import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from '../Todo/TodoList';
import RecoilLogger from 'recoil-logger';

function App() {
  return (
    <div className="container mt-2">
      <RecoilRoot>
        <RecoilLogger />
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
