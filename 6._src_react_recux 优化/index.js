import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)
//当store中的数据发生改变时 subscribe中的回调函数就会执行
store.subscribe(()=> {
    root.render(
        <App />
    )
} )