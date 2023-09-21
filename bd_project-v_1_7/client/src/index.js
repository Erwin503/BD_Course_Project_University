import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import StudentStore from './store/StudentStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      student: new StudentStore(),
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>


      
    </Context.Provider>
    
  </React.StrictMode>
);


