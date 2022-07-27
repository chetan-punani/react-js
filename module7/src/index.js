import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App.js';

const container =  document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
