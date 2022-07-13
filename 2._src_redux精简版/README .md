## 1.求和案例_redux精简版
    (1).去除Count组件自身的状态
    (2).src下建立:
          -src
            -redux
              -store.js
              -count_reducer.js

    (3).store.js:
          1).引入redux中的createStore函数创建一个store
          2).createStor调用时要传入一个为其服务的reducer
          3）.记得暴露store对象

    (4).count_reducer.js:
          1).reducer的本质是一个函数，接收：preState,action 加工返回后的数据
          2).reducer有两个作用: 初始化状态、加工状态
          3).reducer被第一次调用时，是store自动触发的，传递的preState是undefind
    
    (5)在index.js中检测store中状态的改变，一般发生改变要重新渲染<App/>
      备注：redux只负责管理状态，至于状态的改变驱动着页面的更新需要我们自己写。