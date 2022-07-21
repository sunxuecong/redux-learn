import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)
// Provider是一个提供者 只需要把store传给Provide ,他能自动给需要Provide的组件传入store
// 此处需要用Provider包裹App,目的是让App所有的后代容器组件,都能接受到store
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    )