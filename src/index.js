import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './components/header';
import { Main } from './components/Main';
import { About } from './components/About.js';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render( 
    <React.StrictMode>
      <Router>
      <div>
      <Header/>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router> 
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
