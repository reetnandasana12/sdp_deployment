import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './style/index.css';
import './style/tailwind.css';
import App from './App';
import store from './pages/redux/store';
import {Provider} from 'react-redux';
// import Navbar from './components/Navbar/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
    {/* <Navbar/> */}
    <App />
      
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
  
);

