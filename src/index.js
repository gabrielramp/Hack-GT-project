import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: "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" // This is also the default, can be omitted
  });
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Hello!"}],
  });
  console.log(chatCompletion.choices[0].message);
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
);
