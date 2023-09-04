import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {AnimatePresence} from "framer-motion"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AnimatePresence mode='wait' initial={false}>
         <App />
      </AnimatePresence>
    </Router>  
  </React.StrictMode>
);

