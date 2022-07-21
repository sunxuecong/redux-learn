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
// //当store中的数据发生改变时 subscribe中的回调函数就会执行
// store.subscribe(()=> {
//     root.render(
//         <App />
//     )       
// } )



// //当store中的数据发生改变时 subscribe中的回调函数就会执行
// // 但是因为用了react-redux所以容器组件connect()()拥有了自动跟踪store变化并且重新渲染页面的能力
//     root.render(
//         <App />
//     )


// Provider是一个提供者 只需要把store传给Provide ,他能自动给需要Provide的组件传入store
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    )