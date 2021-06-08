import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import './index.css';


ReactDOM.render(
    <SpeechProvider appId="d5e583c7-1a9b-4649-aaee-0eedf8109e95" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);