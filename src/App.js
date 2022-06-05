import './App.css';
import {unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Nextpage from './components/Nextpage';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory({ window });

const App = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Nextpage/>} />
          <Route exact path='*' element={<Login/>} />
        </Routes>
    </HistoryRouter>
        
  );
}

export default App;
