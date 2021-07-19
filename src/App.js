import { BrowserRouter, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import { EditBlock } from "./Components/EditBlock/EditBlock";
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';

function App() {
  const [list, setList] = useState({
    value: '',
    list: [
      { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      { id: 2, text: 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      { id: 3, text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' }
    ]
  });
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {list.list.map((el) => <Route path={`/${el.id}`} render={() => <EditBlock id={el.id} list={list} setList={setList} />} />)}

        <Route exact path='/' render={() => <Main list={list} setList={setList} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
