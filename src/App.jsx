import './App.css'
import Clock from './Clock';
import Counter from './Counter';
import Friends from './Friends';
import Players from './Players';
import Team from './Team';
import Users from './Users';


function App() {

  function clickMe(){
    alert('Click my button 1');
  }

  const clickMe3 = (num) => {
    alert(num + 55);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Clock></Clock>

      <Players></Players>

      <Friends></Friends>
      <Users></Users>

      <Team></Team>
      <Counter></Counter>
      <button onClick={clickMe}>Click 1</button>
      <button onClick={() => {alert('Click my button 2')}}>Click 2</button>
      <button onClick={() => clickMe3(5)}>Click 3</button>
    </>
  )
}

export default App
