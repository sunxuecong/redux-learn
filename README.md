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
      
## 2.求和案例_redux完整版
    新增文件：
      1.count_actions.js 专门用于创建actiond对象
      2.constant.js 放置由于编码疏忽写错action中的type

## 3.求和案例_redux异步action 版
      (1).明确:延迟的动作不想交给自身，想交给action
      (2).创建 action 的函数不在返回一般对象,而是返回一个函数，该函数中写异步任务
      (3).异步任务有结果后,分发一个同步的 action去真正操作数据。
      (4).备注:异步 action 不是必须要写的,完全可以自己等待异步任务的结果了再去分发同步 action。

## 4.求和案例_react_redux基本使用
      (1).明确两个概念:
          1).UI组件:不能使用任何的redux的api,只负责页面的呈现,交互等.
          2).容器组件负责:负责和redux通信,将结果交给UI组件.
      (2).如何创建一个容器组件--靠react-redux的connect函数.
            connent(mapStateToProps,mapDispathToProps)(UI组件)
            -mapStateToProps:映射状态,返回值是一个对象
            -mapDispatchToProps:映射操作方法的状态,返回值是一个对象.
      (3).备注:容器组件中的store是靠props传进去的.而不是在组件中直接引入.
      (4).备注:mapDispatchToProps也可以是一个对象(精简写法) 

 ## 5.求和案例_react-redux优化
      (1).容器组件和UI 组件整合成一个文件
      (2).无需自己给容器组件传递 store，给<App/>组件包裹一个<Provider store = {store}/>即可。
      (3).使用了 react-redux 后也不用再自己检测 redux 中状态的改变了，容器组件组件可以自动完成这个动作。
      (4).mapDispatch 也可以简单的写成一个对象)
      (5).一个组件要和 redux "打交道"要经过那几步？
            1).定义好 UI 组件 -- 不暴露。
            2).引入 connect 生成一个容器组件，并暴露，写法如下：
                  connect(
                           state => ({key:value},
                           {key: xxxxAction})
                        )(UI组件) 
            3).在 UI组件中通过 this.props.xxxxxxx 读取状态和操作。

