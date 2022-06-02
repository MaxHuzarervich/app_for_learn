import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AppGame} from "./Game/appGame";
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter><AppGame/></HashRouter>
    </React.StrictMode>
);


