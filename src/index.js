import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
    hydrate(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootElement
    );
} else {
    render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootElement
    );
}

reportWebVitals();
