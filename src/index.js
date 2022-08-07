import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStylos = createGlobalStyle`

@font-face {
  font-family: 'Tangerine';
  font-style: normal;
  font-weight: normal;
  src: local('Tangerine'), url('./fonst/MontserratAlternates-Thin.otf') format('truetype');
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Tangerine', sans-serif;
    font-weight: 100;

  }

  body {
    background-color: #000;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
  }

  h1 {
    font-weight: 100;
  }
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStylos />
    <App />
  </React.StrictMode>
);

