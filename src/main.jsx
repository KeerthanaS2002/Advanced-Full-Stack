import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  
//import Apple from './Apple';  
//import Dynamic from './Dynamic';
import App from './App';
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);