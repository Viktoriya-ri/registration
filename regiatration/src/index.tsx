import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/App/App';
import {User} from './components/App/App.types';
import reportWebVitals from './reportWebVitals';


const user: User = {
  id: 1,
  name: 'Jon',
  email: 'explorer@explorer.com',
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App user={user}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
