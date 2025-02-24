import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// public > index.html의 <div id="root">를 렌더링한다.
// src > app.js의 app 컴포넌트를 렌더링한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

