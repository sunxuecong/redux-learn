import './App.css';
import Count from './containers/Count';
import Person from './containers/Person';

function App() {
  return (
    <div className="App">
      {/* 此处store需要从父组件传进去  */}
      {/* <Count store={store}/>  //因为有了Provider统一传  所以此处不再需要传入store*/ }
      <Count/>
      <br />
      <br />
      <hr></hr>
      <br />
      <br />
      <Person />
    </div>
  );
}

export default App;
